FROM node:latest
EXPOSE 8081
RUN mkdir -p ./SubtractionService
COPY package.json ./SubtractionService
COPY server.js ./SubtractionService
CMD cd ./SubtractionService && npm install express && node server.js
