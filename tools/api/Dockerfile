FROM node:12-alpine

WORKDIR /app

COPY package.json yarn.lock angular.json nx.json tsconfig.json ./
RUN yarn --no-cache --ignore-optional --frozen-lockfile

ENV NODE_ENV production
# copy app that we have to build and all other deps
COPY apps/api apps/api
COPY libs/data libs/data
COPY libs/publishable-lib libs/publishable-lib
RUN $(npm bin)/ng build api --prod

EXPOSE 3333

# Run node app under tini
# CMD ["/nodejs/bin/node", "main.js"]
CMD ["node", "dist/apps/api/main.js"]
