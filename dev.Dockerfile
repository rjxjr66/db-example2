FROM node:8

WORKDIR /app
ADD ./package.json .
ADD ./npm-shrinkwrap.json .
RUN npm install