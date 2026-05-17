import {

  Body,
  Controller,
  Post,

} from '@nestjs/common';

import {

  ApiOperation,
  ApiTags,

} from '@nestjs/swagger';

import { LocationService }
from './location.service';

@ApiTags('Location')

@Controller('location')

export class LocationController {

  constructor(

    private readonly locationService:
      LocationService,

  ) {}

  @Post('update')

  @ApiOperation({
    summary:
      'Update live location',
  })

  update(
    @Body() dto: any,
  ) {

    return this.locationService
      .update(dto);

  }

}
