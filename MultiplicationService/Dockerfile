FROM node:latest
EXPOSE 8081
RUN mkdir -p ./MultiplicationService
COPY package.json ./MultiplicationService
COPY server.js ./MultiplicationService
CMD cd ./MultiplicationService && npm install express && node server.js
