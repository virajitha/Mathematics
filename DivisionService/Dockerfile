FROM node:latest
EXPOSE 8081
RUN mkdir -p ./DivisionService
COPY package.json ./DivisionService
COPY server.js ./DivisionService
CMD cd ./DivisionService && npm install express && node server.js
