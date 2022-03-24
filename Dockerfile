FROM node:latest

RUN mkdir -p /home/node/app/

WORKDIR /home/node/app

COPY package.json ./

RUN yarn

COPY  . .

RUN yarn build

EXPOSE 3000

CMD [ "node", "./dist/index.js" ]
