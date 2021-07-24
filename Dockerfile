# --------------> The build image
FROM node:latest AS build

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm ci --only=production
 
# --------------> The production image
FROM node:lts-alpine@sha256:fb6cb918cc72869bd625940f42a7d8ae035c4e786d08187b94e8b91c6a534dfd

#RUN apk add dumb-init
RUN npm install pm2 -g

ENV NODE_ENV production

USER node

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules /usr/src/app/node_modules

COPY --chown=node:node . /usr/src/app

EXPOSE 8080

CMD ["pm2-runtime" , "server.js"]