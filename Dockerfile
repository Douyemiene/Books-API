FROM node:latest

RUN mkdir -p /home/node/app/

WORKDIR /home/node/app

COPY package.json ./

RUN yarn

COPY  . .

EXPOSE 3000

CMD [ "node", "index.js" ]
