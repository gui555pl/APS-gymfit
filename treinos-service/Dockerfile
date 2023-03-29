from node:12.16.1-alpine3.9

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "build" ]

CMD [ "npm", "start" ]

# Path: docker-compose.yml