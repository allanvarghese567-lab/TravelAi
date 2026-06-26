import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProxyService } from './services/proxy.service';
import { AuthController } from './controllers/auth.controller';
import { LocationController } from './controllers/location.controller';
import { TripController } from './controllers/trip.controller';
import { ItineraryController } from './controllers/itinerary.controller';
import { RecommendationController } from './controllers/recommendation.controller';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [],
  controllers: [
    AppController,
    AuthController,
    LocationController,
    TripController,
    ItineraryController,
    RecommendationController,
  ],
  providers: [AppService, ProxyService, AuthGuard],
})
export class AppModule {}
