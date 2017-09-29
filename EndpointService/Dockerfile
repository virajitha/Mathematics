FROM node:latest
EXPOSE 8080
RUN mkdir -p ./EndpointService
COPY ServiceHelper.js ./EndpointService
COPY package.json ./EndpointService
COPY server.js ./EndpointService
CMD cd ./EndpointService && npm install express && node server.js
