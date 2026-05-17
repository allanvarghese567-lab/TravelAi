import { Module } from '@nestjs/common';

import { AppController }
from './app.controller';

import { AppService }
from './app.service';

import { AuthModule }
from './modules/auth/auth.module';

import { TripModule }
from './modules/trip/trip.module';

import { RecommendationModule }
from './modules/recommendation/recommendation.module';

import { LocationModule }
from './modules/location/location.module';

@Module({

  imports: [

    AuthModule,
    TripModule,
    RecommendationModule,
    LocationModule,

  ],

  controllers: [

    AppController

  ],

  providers: [

    AppService

  ],

})

export class AppModule {}
