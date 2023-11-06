FROM --platform=linux/amd64 node:18

WORKDIR /app

COPY /.npmrc /app/
COPY /package*.json /app/
RUN npm ci

COPY /static /app/static

COPY svelte.config.js /app/
COPY vite.config.ts /app/
COPY tsconfig.json /app/

COPY /src /app/src
RUN npm run build

CMD [ "node", "/app/build/index.js" ]%                                                                       