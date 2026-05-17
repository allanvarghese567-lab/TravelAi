import {

  Body,
  Controller,
  Post,

} from '@nestjs/common';

import {

  ApiTags,
  ApiOperation,

} from '@nestjs/swagger';

import { RecommendationService }
from './recommendation.service';

@ApiTags('Recommendations')

@Controller('recommendations')

export class RecommendationController {

  constructor(

    private readonly recommendationService:
      RecommendationService,

  ) {}

  @Post()

  @ApiOperation({
    summary:
      'Get recommendations',
  })

  recommend(
    @Body() dto: any,
  ) {

    return this.recommendationService
      .recommend(dto);

  }

}
