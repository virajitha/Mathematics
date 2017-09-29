FROM node:latest
EXPOSE 8081
RUN mkdir -p ./AdditionService
COPY package.json ./AdditionService
COPY server.js ./AdditionService
CMD cd ./AdditionService && npm install express && node server.js
