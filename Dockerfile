FROM node:8

WORKDIR /app

ADD ./package.json .
ADD ./npm-shrinkwrap.json .
ADD ./tsconfig.build.json .
ADD ./tsconfig.json .

ADD ./src .

CMD [ "npm", "run", "start:prod" ]