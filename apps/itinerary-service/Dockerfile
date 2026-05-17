FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --workspace=apps/itinerary-service

EXPOSE 3003

CMD ["npm", "run", "start", "--workspace=apps/itinerary-service"]