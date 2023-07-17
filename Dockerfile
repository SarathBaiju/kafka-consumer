#base image
FROM node:18

# create app directory
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . . 

RUN npm run build

CMD [ "node",  "dist/main"]