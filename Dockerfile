FROM node:latest

RUN apt-get update -y && apt-get upgrade -y

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

ENV NODE_ENV development

# EXPOSE 5000

CMD ["npm", "start"]