import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RecommendationModule } from './recommendation.module';

async function bootstrap() {
  const app = await NestFactory.create(RecommendationModule);

  const config = new DocumentBuilder()
    .setTitle('Recommendation Service')
    .setDescription('Recommendation API')
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3004); // Different port
}

bootstrap();