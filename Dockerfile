# FROM node:14-alpine
# FROM node:14.18.1-alpine3.12
FROM node:16.13.0-alpine3.12

ENV WORKDIR=/app

WORKDIR $WORKDIR

COPY . ./

RUN yarn --frozen-lockfile
RUN yarn build

CMD ["yarn", "serve"]
