FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i

RUN npm run build

COPY dist/ ./

CMD ["npm", "run", "dev"]
