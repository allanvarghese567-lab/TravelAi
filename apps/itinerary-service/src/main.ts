
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ItineraryModule } from './itinerary.module';

async function bootstrap() {
  const app = await NestFactory.create(ItineraryModule);

  const config = new DocumentBuilder()
    .setTitle('Itinerary Service')
    .setDescription('Itinerary API')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3002); // Different port
}

bootstrap();