import {

  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,

} from '@nestjs/common';

import {

  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,

} from '@nestjs/swagger';

import { TripService }
from './trip.service';

import {

  CreateTripDto,
  UpdateTripDto,
  StartTripDto,
  StopTripDto,

} from '@travel-ai/shared-dto';

@ApiTags('Trips')

@ApiBearerAuth()

@Controller('trips')

export class TripController {

  constructor(

    private readonly tripService:
      TripService,

  ) {}

  /*
  ==========================
  CREATE TRIP
  ==========================
  */

  @Post()

  @ApiOperation({
    summary:
      'Create new trip',
  })

  @ApiResponse({
    status: 201,
    description:
      'Trip created successfully',
  })

  createTrip(

    @Body()
    dto: CreateTripDto,

  ) {

    return this.tripService
      .createTrip(dto);

  }

  /*
  ==========================
  GET ALL TRIPS
  ==========================
  */

  @Get()

  @ApiOperation({
    summary:
      'Get all trips',
  })

  getTrips() {

    return this.tripService
      .getTrips();

  }

  /*
  ==========================
  GET SINGLE TRIP
  ==========================
  */

  @Get(':id')

  @ApiOperation({
    summary:
      'Get trip details',
  })

  getTrip(

    @Param('id')
    id: string,

  ) {

    return this.tripService
      .getTrip(id);

  }

  /*
  ==========================
  UPDATE TRIP
  ==========================
  */

  @Patch(':id')

  @ApiOperation({
    summary:
      'Update trip',
  })

  updateTrip(

    @Param('id')
    id: string,

    @Body()
    dto: UpdateTripDto,

  ) {

    return this.tripService
      .updateTrip(
        id,
        dto,
      );

  }

  /*
  ==========================
  DELETE TRIP
  ==========================
  */

  @Delete(':id')

  @ApiOperation({
    summary:
      'Delete trip',
  })

  deleteTrip(

    @Param('id')
    id: string,

  ) {

    return this.tripService
      .deleteTrip(id);

  }

  /*
  ==========================
  START TRIP
  ==========================
  */

  @Post('start')

  @ApiOperation({
    summary:
      'Start trip',
  })

  startTrip(

    @Body()
    dto: StartTripDto,

  ) {

    return this.tripService
      .startTrip(
        dto.tripId,
      );

  }

  /*
  ==========================
  STOP TRIP
  ==========================
  */

  @Post('stop')

  @ApiOperation({
    summary:
      'Stop trip',
  })

  stopTrip(

    @Body()
    dto: StopTripDto,

  ) {

    return this.tripService
      .stopTrip(
        dto.tripId,
      );

  }

}
