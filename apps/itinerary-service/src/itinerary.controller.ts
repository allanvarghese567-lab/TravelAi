import {

  Body,
  Controller,
  Post,

} from '@nestjs/common';

import {

  ApiTags,
  ApiOperation,

} from '@nestjs/swagger';

import { ItineraryService }
from './itinerary.service';

@ApiTags('Itinerary')

@Controller('itinerary')

export class ItineraryController {

  constructor(

    private readonly itineraryService:
      ItineraryService,

  ) {}

  @Post()

  @ApiOperation({
    summary:
      'Create itinerary',
  })

  create(
    @Body() dto: any,
  ) {

    return this.itineraryService
      .create(dto);

  }

}
