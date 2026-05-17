FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --workspace=apps/recommendation-service

EXPOSE 3004

CMD ["npm", "run", "start", "--workspace=apps/recommendation-service"]