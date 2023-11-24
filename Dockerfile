FROM node:21

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/frontend
RUN NODE_OPTIONS="--max-old-space-size=4096" npm i

RUN npm run build

WORKDIR /usr/src/app/backend
RUN NODE_OPTIONS="--max-old-space-size=4096" npm i

EXPOSE 3001

CMD ["node", "app.js"]