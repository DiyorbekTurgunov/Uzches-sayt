FROM node:25-apline as builder

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm run build

FROM node:25-apline

WORKDIR /app

COPY package.json ./

RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

CMD ["node", "dist/main.js"]