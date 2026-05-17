import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {ServiceConstants} from '@shared/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle(ServiceConstants.SERVICE_CONFIG.app.title)
    .setDescription(ServiceConstants.SERVICE_CONFIG.app.desc)
    .setVersion(ServiceConstants.SERVICE_CONFIG.app.version)
    .addTag(ServiceConstants.AUTH_SERVICE)
    .addTag(ServiceConstants.LOCATION_SERVICE)
    .addTag(ServiceConstants.TRIP_SERVICE)
    .addTag(ServiceConstants.ITINERARY_SERVICE)
    .addTag(ServiceConstants.RECOMMENDATION_SERVICE)
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();