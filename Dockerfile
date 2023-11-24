FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

RUN npm cache clean --force

ENV NODE_OPTIONS="--max_old_space_size=4096"

WORKDIR /usr/src/app/frontend
RUN npm ci --no-audit --no-fund
RUN npm run build

WORKDIR /usr/src/app/backend
RUN npm ci --no-audit --no-fund

EXPOSE 3001

CMD ["node", "app.js"]