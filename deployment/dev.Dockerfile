FROM node:18-alpine

ARG DEV

WORKDIR /app

COPY package*.json /app/
COPY yarn.lock /app/

RUN if [ "$DEV" ]; then yarn install --prod; else yarn install; fi

COPY . /app
