FROM yordanisperez/ubuntu-nvm-nodejs

RUN mkdir -p /home/node/app/node_modules 

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "server.js","start","npm"]