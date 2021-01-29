FROM node:latest

WORKDIR /api

COPY package*.json /api/
COPY . /api/

RUN npm install -D typescript
RUN npm install

EXPOSE 8080

CMD ["npm", "start"]