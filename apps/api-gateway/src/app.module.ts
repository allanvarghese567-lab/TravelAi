import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../../auth-service/src/auth.module';
import { ItineraryModule } from '../../itinerary-service/src/itinerary.module';
import { LocationModule } from '../../location-service/src/location.module';
import { RecommendationModule } from '../../recommendation-service/src/recommendation.module';

@Module({
  imports: [
    AuthModule,
    ItineraryModule,
    LocationModule,
    RecommendationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
