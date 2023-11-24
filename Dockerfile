FROM node:16

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/frontend

RUN npm ci --no-audit --no-fund
RUN npm run build

WORKDIR /usr/src/app/backend
RUN npm ci --no-audit --no-fund

EXPOSE 3001

CMD ["node", "app.js"]
