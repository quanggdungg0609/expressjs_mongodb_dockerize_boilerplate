FROM node:20

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 8080

CMD ["node", "server.js"]