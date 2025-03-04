# FROM node:14-alpine
# FROM node:14.18.1-alpine3.12
# FROM node:16.13.0-alpine3.12
# FROM node:16.20.2-alpine3.17
FROM node:20.10.0-alpine3.17

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
COPY package.json pnpm-*.yaml ./
COPY packages/api/package.json packages/api/
COPY packages/api-graphql/package.json packages/api-graphql/
COPY packages/app/package.json packages/app/
COPY packages/audio/package.json packages/audio/
COPY packages/cast/package.json packages/cast/
COPY packages/chrome/package.json packages/chrome/
COPY packages/client/package.json packages/client/
COPY packages/cron/package.json packages/cron/
COPY packages/ext/package.json packages/ext/
COPY packages/gphoto/package.json packages/gphoto/
COPY packages/lan/package.json packages/lan/
COPY packages/llama/package.json packages/llama/
COPY packages/movie/package.json packages/movie/
COPY packages/overlay/package.json packages/overlay/
COPY packages/photo/package.json packages/photo/
COPY packages/player/package.json packages/player/
COPY packages/recipes/package.json packages/recipes/
COPY packages/request/package.json packages/request/
COPY packages/schema/package.json packages/schema/
COPY packages/scrap/package.json packages/scrap/
COPY packages/share/package.json packages/share/
COPY packages/speed/package.json packages/speed/
COPY packages/sql/package.json packages/sql/
COPY packages/status/package.json packages/status/
COPY packages/stream/package.json packages/stream/
COPY packages/transfer/package.json packages/transfer/
COPY packages/video/package.json packages/video/
COPY packages/wakeword/package.json packages/wakeword/
COPY packages/wakeword/bin/ packages/wakeword/bin/
COPY packages/waveform/package.json packages/waveform/
COPY packages/web/package.json packages/web/
COPY packages/webrtc/package.json packages/webrtc/
COPY packages/worker/package.json packages/worker/
COPY packages/worker/bin/ packages/worker/bin/
# RUN yarn --frozen-lockfile
# RUN yarn add -W music-metadata@7 strtok3 token-types
RUN pnpm i

COPY . ./
RUN pnpm build && pnpm prune --prod --config.ignore-scripts=true

CMD ["pnpm", "serve"]
