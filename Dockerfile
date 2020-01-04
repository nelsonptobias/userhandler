FROM node:10-alpine

WORKDIR /app

ENV PORT=8080
EXPOSE 8080

ENV TZ=America/Sao_Paulo

COPY ["package.json", "./"]
RUN npm install --production

COPY . .

CMD ["node", "./app.js"]
