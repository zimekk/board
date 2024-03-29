import { Router } from "express";
import { exec } from "child_process";
import { createTransport } from "nodemailer";
import { query } from "@dev/sql";
import { z } from "zod";
import mqtt from "mqtt";
import os from "os";
import sslChecker from "ssl-checker";
import type { SchemaType } from "../schema";
import { getTotal } from "../utils";

const { MQTT_URL } = z
  .object({
    MQTT_URL: z.string().default("mqtt://mqtt"),
  })
  .parse(process.env);

console.log({ MQTT_URL });

const client = mqtt.connect(MQTT_URL);

client.on("connect", () => {
  // client.subscribe("presence", (err) => {
  //   if (!err) {
  //     client.publish("presence", "Hello mqtt");
  //   }
  // });
  setInterval(() => {
    client.publish(
      "status",
      JSON.stringify({
        freemem: os.freemem(),
        totalmem: os.totalmem(),
        hostname: os.hostname(),
        loadavg: os.loadavg(),
        platform: os.platform(),
        type: os.type(),
        uptime: os.uptime(),
      }),
    );
  }, 5000);
});

// client.on("message", (_topic, message) => {
//   // message is Buffer
//   console.log(message.toString());
//   client.end();
// });

async function notify(data: { total?: number; ssl?: object[] }) {
  const subject = data.ssl
    ? `Board Notification - SSL`
    : `Board Notification - Usage ${data.total}%`;
  const text = JSON.stringify(data, null, 2);

  const transporter = createTransport(process.env.SMTP_URL, {
    from: process.env.MAIL_FROM,
  });

  const info = await transporter.sendMail({
    to: process.env.MAIL_TO,
    subject,
    text,
  });
  console.log(info);

  // only needed when using pooled connections
  transporter.close();
}

const diskFree = () =>
  new Promise<string[]>((resolve, reject) =>
    exec("df -h", (error, stdout) =>
      error
        ? reject(error)
        : resolve(stdout.split("\n").filter((name) => name.match("^/dev/"))),
    ),
  );

// https://stackoverflow.com/questions/56771030/node-js-how-to-check-get-ssl-certificate-expiry-date
const sslCheck = () =>
  Promise.all(
    (process.env.SSL_CHECK || "")
      .split(":")
      .concat([
        // "badssl.com",
        // "expired.badssl.com",
      ])
      .filter(Boolean)
      .map((hostname) => sslChecker(hostname, { method: "GET", port: 443 })),
  );

export const router = () =>
  Router().get("/status", (_req, res, next) =>
    Promise.all([
      diskFree(),
      process.env.DATABASE_URL
        ? query(
            "SELECT pg_database.datname AS name, pg_size_pretty(pg_database_size(pg_database.datname)) AS size FROM pg_database",
            [],
          )
        : {
            rows: [],
          },
      sslCheck(),
    ])
      .then(([usage, data, ssl]) => ({
        databases: data.rows,
        cpus: os.cpus(),
        freemem: os.freemem(),
        totalmem: os.totalmem(),
        hostname: os.hostname(),
        loadavg: os.loadavg(),
        platform: os.platform(),
        type: os.type(),
        uptime: os.uptime(),
        usage,
        total: getTotal(usage),
        ssl,
      }))
      .then((result: SchemaType) =>
        res.json({
          result,
        }),
      )
      .catch(next),
  );

export const status = async (data: SchemaType) =>
  Promise.all([
    diskFree().then((usage) => getTotal(usage)),
    sslCheck().then((ssl) =>
      ssl.filter(({ daysRemaining }) => daysRemaining <= 20),
    ),
  ]).then(async ([total, ssl]) => {
    if (total > 95) {
      await notify({ total });
    }
    if (ssl.length > 0) {
      await notify({ ssl });
    }
    return {
      json: {
        ssl,
        total,
        ...data,
      },
    };
  });
