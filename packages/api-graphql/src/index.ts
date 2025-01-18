import { Router } from "express";
import { graphqlHTTP } from "express-graphql";
import { PubSub } from "graphql-subscriptions";
import schema from "./schema";

const PORT = 8080;
const endpoint = "/graphql";
const subscriptionEndpoint = "/subscriptions";

const context = {
  pubsub: new PubSub(),
};

export const useServer = (server) =>
  require("graphql-ws/use/ws").useServer(
    {
      schema,
      context,
    },
    // https://github.com/websockets/ws#client-authentication
    new (require("ws").Server)({
      server,
      path: subscriptionEndpoint,
    }),
  );

export const router = () =>
  Router().use(
    endpoint,
    graphqlHTTP({
      schema,
      graphiql: {
        // @ts-ignore
        subscriptionEndpoint: `ws://localhost:${PORT}${subscriptionEndpoint}`,
      },
      pretty: true,
      context,
    }),
  );
