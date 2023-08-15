# FROM node:14-alpine
# FROM node:14.18.1-alpine3.12
# FROM node:16.13.0-alpine3.12
FROM node:16.20.2-alpine3.17

ENV WORKDIR=/app
RUN npm i -g pnpm

WORKDIR $WORKDIR
COPY package.json pnpm-*.yaml ./
COPY packages/api/package.json packages/api/
COPY packages/app/package.json packages/app/
COPY packages/chrome/package.json packages/chrome/
COPY packages/schema/package.json packages/schema/
COPY packages/scrap/package.json packages/scrap/
COPY packages/sql/package.json packages/sql/
COPY packages/web/package.json packages/web/
# RUN yarn --frozen-lockfile
# RUN yarn add -W music-metadata@7 strtok3 token-types
RUN pnpm i

COPY . ./
RUN pnpm build

CMD ["pnpm", "serve"]
