FROM node:latest

COPY . /src

WORKDIR /src

RUN npm i --production
RUN npm run build

EXPOSE 3001

CMD npm start