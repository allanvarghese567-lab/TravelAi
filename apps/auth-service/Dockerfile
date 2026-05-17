FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build --workspace=apps/auth-service

EXPOSE 3001

CMD ["npm", "run", "start", "--workspace=apps/auth-service"]