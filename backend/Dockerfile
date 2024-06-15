FROM node:alpine

WORKDIR /app
COPY package.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .
#RUN node server.js;

CMD ["npm", "run", "start"]

# CMD ["tail", "-f", "/dev/null"]
