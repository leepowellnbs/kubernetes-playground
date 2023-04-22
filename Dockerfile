FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 8888
CMD ["npm", "start"]
