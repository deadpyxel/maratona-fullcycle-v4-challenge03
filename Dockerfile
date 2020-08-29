FROM node:lts-alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build
WORKDIR ./dist

EXPOSE 3000
CMD ["npm", "start"]
