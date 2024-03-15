import React, {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { gql } from "graphql-request";
import { from } from "rxjs";
import { map } from "rxjs/operators";
import { client, subscriptions } from "@dev/client";
import styles from "./styles.module.scss";

import type { WiFiNetwork } from "node-wifi";

class Service {
  client = client;
  subscriptions = subscriptions;
}

const SCAN = gql`
  query ScanQuery {
    lan {
      scan
    }
  }
`;

const GET_CURRENT_CONNECTIONS = gql`
  query GetCurrentConnectionsQuery {
    lan {
      currentConnections
    }
  }
`;

export class LanService extends Service {
  scan() {
    return from(this.client.request(SCAN)).pipe(
      map(({ lan: { scan } }) => scan),
    );
  }
  getCurrentConnections() {
    return from(this.client.request(GET_CURRENT_CONNECTIONS)).pipe(
      map(({ lan: { currentConnections } }) => currentConnections),
    );
  }
}

const service = new LanService();

export function useService() {
  const [data, setData] = useState<WiFiNetwork[] | null>(() => []);

  useEffect(() => {
    service.getCurrentConnections().subscribe((data) => setData(data));
  }, []);

  return {
    data,
    scan: useCallback(
      () => service.scan().subscribe((data) => setData(data)),
      [],
    ),
  };
}

enum Sort {
  ID,
  IP,
}

type DevicesType = { [key: string]: string };

const getDeviceData = (data: { mac: string }[], devices: DevicesType) =>
  data.reduce((result, { mac }) => {
    const entry = Object.entries(devices).find(([pattern]) =>
      mac.includes(pattern),
    );
    return entry
      ? Object.assign(result, {
          [mac]: entry[1],
        })
      : result;
  }, {});

const ipToInt = (ip: string) =>
  ip.split(".").reduce((ipInt, octet) => ipInt * 256 + parseInt(octet, 10), 0);

const compareIds = (id1: string, id2: string) => Number(id1) - Number(id2);

const compareIps = (ip1: string, ip2: string) => ipToInt(ip1) - ipToInt(ip2);

function AddressReservation({ devices }: { devices: DevicesType }) {
  const [sort, setSort] = useState(Sort.ID);
  const [text, setText] = useState(`ID	MAC Address	Reserved IP Address	Status	Modify
`);

  const data = useMemo(
    () =>
      text
        .split("\n")
        .map((line: string) =>
          line.match(/^(\d+)\t(\S+-\S+-\S+-\S+-\S+-\S+)\t(\S+)\t(\S+)/),
        )
        .filter(Boolean)
        .map(([_, id, mac, ip, status]) => ({
          id,
          mac,
          ip,
          status,
        }))
        .toSorted((item1, item2) =>
          sort === Sort.ID
            ? compareIds(item1.id, item2.id)
            : compareIps(item1.ip, item2.ip),
        ),
    [sort, text],
  );

  const deviceData = useMemo(
    () => getDeviceData(data, devices),
    [data, devices],
  );

  return (
    <div className={styles.Section}>
      <h3>Address Reservation</h3>
      <div style={{ display: "flex" }}>
        <textarea
          style={{ flex: 1 }}
          rows={5}
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
      </div>
      {data && (
        <table>
          <tbody>
            <tr>
              <th>
                {sort === Sort.ID ? (
                  <u>ID</u>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => (e.preventDefault(), setSort(Sort.ID))}
                  >
                    ID
                  </a>
                )}
              </th>
              <th>MAC Address</th>
              <th>
                {sort === Sort.IP ? (
                  <u>Reserved IP Address</u>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => (e.preventDefault(), setSort(Sort.IP))}
                  >
                    Reserved IP Address
                  </a>
                )}
              </th>
              <th>Status</th>
            </tr>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>
                  {item.mac}
                  {deviceData[item.mac] && (
                    <span> ({deviceData[item.mac]})</span>
                  )}
                </td>
                <td>{item.ip}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <pre>{JSON.stringify(text, null, 2)}</pre>
    </div>
  );
}

function ClientsList({ devices }: { devices: DevicesType }) {
  const [sort, setSort] = useState(Sort.ID);
  const [text, setText] =
    useState(`ID	Client Name	MAC Address	Assigned IP	Lease Time
`);

  const data = useMemo(
    () =>
      text
        .split("\n")
        .map((line: string) =>
          line.match(/^(\d+)\t(\S+)\t(\S+-\S+-\S+-\S+-\S+-\S+)\t(\S+)\t(\S+)/),
        )
        .filter(Boolean)
        .map(([_, id, name, mac, ip, time]) => ({
          id,
          name,
          mac,
          ip,
          time,
        }))
        .toSorted((item1, item2) =>
          sort === Sort.ID
            ? compareIds(item1.id, item2.id)
            : compareIps(item1.ip, item2.ip),
        ),
    [sort, text],
  );

  const deviceData = useMemo(
    () => getDeviceData(data, devices),
    [data, devices],
  );

  return (
    <div className={styles.Section}>
      <h3>DHCP Clients List</h3>
      <div style={{ display: "flex" }}>
        <textarea
          style={{ flex: 1 }}
          rows={5}
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
      </div>
      {data && (
        <table>
          <tbody>
            <tr>
              <th>
                {sort === Sort.ID ? (
                  <u>ID</u>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => (e.preventDefault(), setSort(Sort.ID))}
                  >
                    ID
                  </a>
                )}
              </th>
              <th>Client Name</th>
              <th>MAC Address</th>
              <th>
                {sort === Sort.IP ? (
                  <u>Assigned IP</u>
                ) : (
                  <a
                    href="#"
                    onClick={(e) => (e.preventDefault(), setSort(Sort.IP))}
                  >
                    Assigned IP
                  </a>
                )}
              </th>
              <th>Lease Time</th>
            </tr>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  {item.mac}
                  {deviceData[item.mac] && (
                    <span> ({deviceData[item.mac]})</span>
                  )}
                </td>
                <td>{item.ip}</td>
                <td>{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <pre>{JSON.stringify(text, null, 2)}</pre>
    </div>
  );
}

function DevicesList({
  text,
  setText,
}: {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className={styles.Section}>
      <h3>Devices List</h3>
      <div style={{ display: "flex" }}>
        <textarea
          style={{ flex: 1 }}
          rows={5}
          value={text}
          onChange={({ target }) => setText(target.value)}
        />
      </div>
      <pre>{JSON.stringify(text, null, 2)}</pre>
    </div>
  );
}

export default function Section() {
  const { data, scan } = useService();
  const [text, setText] = useState(`
D9-11 pizero
`);

  const devices = useMemo(
    () =>
      text
        .split("\n")
        .map((line: string) => line.match(/^(\S+)\s+([^\n|$]+)/))
        .filter(Boolean)
        .map(([_, pattern, name]) => ({
          pattern,
          name,
        }))
        .reduce(
          (result, { pattern, name }) =>
            Object.assign(result, { [pattern]: name }),
          {},
        ),
    [text],
  );

  return (
    <div className={styles.Section}>
      <h2>Lan</h2>
      {data && (
        <table>
          <tbody>
            <tr>
              <th>ssid</th>
              <th>mac</th>
              <th>channel</th>
              <th>signal_level</th>
              <th>quality</th>
              <th>security</th>
            </tr>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{item.ssid}</td>
                <td>{item.mac}</td>
                <td>{item.channel}</td>
                <td>{item.signal_level}</td>
                <td>{item.quality}</td>
                <td>{item.security}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={() => scan()}>scan</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h2>DHCP</h2>
      <DevicesList text={text} setText={setText} />
      <ClientsList devices={devices} />
      <AddressReservation devices={devices} />
    </div>
  );
}
