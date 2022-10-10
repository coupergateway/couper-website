FROM node:fermium-alpine

WORKDIR /opt/app

COPY package.json package-lock.json cucumber.js ./
RUN npm ci
