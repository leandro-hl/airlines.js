FROM node:latest

WORKDIR /src

COPY package*.json ./

#RUN npm i -> Development
#RUN npm ci -> production
RUN npm ci 

COPY . .

RUN npm run build

#This is the container port where the app would be available
#Should be the same that you listen to with express.
EXPOSE 3001

CMD npm start