# FROM node:14-alpine
# FROM node:14.18.1-alpine3.12
FROM node:17.3.0-alpine3.12

ENV WORKDIR=/app

WORKDIR $WORKDIR
COPY package.json yarn.lock ./
COPY packages/api/package.json packages/api/
COPY packages/app/package.json packages/app/
COPY packages/sql/package.json packages/sql/
COPY packages/web/package.json packages/web/
RUN yarn --frozen-lockfile
RUN yarn add -W music-metadata strtok3 token-types

COPY . ./
RUN yarn build

CMD ["yarn", "serve"]
