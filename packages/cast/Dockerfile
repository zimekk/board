FROM node:20.10.0-alpine3.17

ENV WORKDIR=/app
RUN npm i -g pnpm

WORKDIR $WORKDIR
COPY tsconfig.base.json ./tsconfig.json

ENV WORKDIR=/app/packages/cast

WORKDIR $WORKDIR
COPY package.json ./
RUN pnpm i --config.ignore-scripts=true

COPY . ./
# RUN pnpm build && pnpm prune --prod --config.ignore-scripts=true
RUN pnpm build

CMD ["pnpm", "start"]
