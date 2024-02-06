FROM node:20.10.0-alpine3.17

ENV WORKDIR=/app
RUN npm i -g pnpm

WORKDIR $WORKDIR
COPY tsconfig.base.json ./tsconfig.json

ENV WORKDIR=/app/packages/cast

WORKDIR $WORKDIR
COPY package.json ./
RUN pnpm i

COPY . ./
RUN pwd && ls -la && ls -la ../..
RUN pnpm build && pnpm prune --prod --config.ignore-scripts=true

CMD ["pnpm", "start"]
