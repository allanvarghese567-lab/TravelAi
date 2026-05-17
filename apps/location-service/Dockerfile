FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --workspace=apps/location-service

EXPOSE 3002

CMD ["npm", "run", "start", "--workspace=apps/location-service"]