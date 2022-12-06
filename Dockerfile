FROM node:19-alpine3.15

ARG MONGO_URL

ARG PORT=3000

WORKDIR /app

COPY . /app/

RUN npm ci

CMD ["node","index.js"]