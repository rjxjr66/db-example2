FROM node:8

WORKDIR /app
VOLUME [ "/app" ]
EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]