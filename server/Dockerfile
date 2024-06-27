FROM node:16-alpine

RUN apk update && apk add openssl

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

#RUN #cd npx prisma generate
RUN cd src/models/prisma && npx prisma generate

CMD ["npm", "start"]
