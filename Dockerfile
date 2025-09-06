# FROM node:14-alpine
# FROM node:14.18.1-alpine3.12
# FROM node:16.13.0-alpine3.12
# FROM node:16.20.2-alpine3.17
# FROM node:20.10.0-alpine3.17
FROM node:22.19.0-alpine3.22 AS base

# https://pptr.dev/troubleshooting#running-on-alpine
# Installs latest Chromium (100) package.
RUN apk add --no-cache \
      alsa-utils \
      chromium \
      mpg123 \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      networkmanager-cli \
      ttf-freefont \
      tzdata \
      zip

# https://stackoverflow.com/questions/68996420/how-to-set-timezone-inside-alpine-base-docker-image
# https://docs.diladele.com/docker/timezones.html
ENV TZ=Europe/Warsaw

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# https://withcatai.github.io/node-llama-cpp/guide/#installation
ENV NODE_LLAMA_CPP_SKIP_DOWNLOAD=true

ENV WORKDIR=/app
RUN npm i -g pnpm

WORKDIR $WORKDIR
COPY pnpm-lock.yaml .
# RUN pnpm fetch --prod
RUN ls -la
RUN pnpm fetch

COPY . .
RUN pnpm install --offline --config.ignore-scripts=true
RUN pnpm build && pnpm prune --prod --config.ignore-scripts=true

CMD ["pnpm", "serve"]
