FROM node:alpine

WORKDIR /app
COPY package.json ./

RUN npm install

COPY . .
#RUN node server.js;

# CMD ["npm", "run", "start"]

CMD ["tail", "-f", "/dev/null"]
