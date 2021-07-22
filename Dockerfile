FROM yordanisperez/ubuntu-nvm-nodejs

RUN mkdir -p /home/app/node_modules 

WORKDIR /home/app

COPY package*.json ./

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH


RUN npm install