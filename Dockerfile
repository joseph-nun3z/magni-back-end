FROM node:14
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
CMD yarn start
EXPOSE 4000