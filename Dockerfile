FROM yordanisperez/ubuntu-nvm-nodejs

RUN mkdir -p /home/app/node_modules 

WORKDIR /home/app

COPY package*.json ./

RUN npm install

EXPOSE 8080


CMD [ "node", "server.js","start","npm"]