import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import {ServiceConstants} from '@shared/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Travel AI Platform')
    .setDescription('Unified API Gateway')
    .setVersion('1.0')
    .addTag('auth')
    .addTag('location')
    .addTag('trip')
    .addTag('itinerary')
    .addTag('recommendation')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();