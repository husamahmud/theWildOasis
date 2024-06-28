FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate --schema=./src/models/prisma/schema.prisma

CMD ["npm", "start"]
