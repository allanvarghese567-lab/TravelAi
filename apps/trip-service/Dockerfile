FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --workspace=apps/trip-service

EXPOSE 3005

CMD ["npm", "run", "start", "--workspace=apps/trip-service"]