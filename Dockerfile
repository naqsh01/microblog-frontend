FROM node:12-alpine

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn install

COPY . /app

RUN yarn run build
EXPOSE 3000

CMD [ "yarn", "start" ]