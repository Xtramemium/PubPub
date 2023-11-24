FROM node:18

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/frontend
RUN nmp i
RUN npm run build

WORKDIR /usr/src/app/backend
RUN nmp i

EXPOSE 3001

CMD ["node", "app.js"]