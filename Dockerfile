FROM node:20 AS BASE
WORKDIR /usr/local/app

COPY package.json /usr/local/app/
RUN --mount=type=cache,id=yarn,target=/usr/local/share/.cache/yarn \
    yarn install

COPY . /usr/local/app/
CMD [ "yarn", "start" ]
