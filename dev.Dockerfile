FROM node:8

WORKDIR /app
ADD ./package.json .
ADD ./npm-shrinkwrap.json .
RUN npm install

ADD ./nodemon-debug.json .
ADD ./nodemon.json .
ADD ./tsconfig.build.json .
ADD ./tsconfig.json .

EXPOSE 3000

VOLUME [ "/app/src" ]