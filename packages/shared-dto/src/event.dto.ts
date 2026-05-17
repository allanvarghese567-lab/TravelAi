import { ApiProperty } from '@nestjs/swagger';

export enum TripEvents {

  LOCATION_UPDATED =
    'location.updated',

  TRIP_CREATED =
    'trip.created',

  ITINERARY_UPDATED =
    'itinerary.updated',

}

export class LocationUpdatedEvent {

  @ApiProperty({
    example:
      'trip_01HX92ABC123',
    description:
      'Unique trip identifier'
  })
  tripId: string;

  @ApiProperty({
    example:
      'user_01HX92XYZ456',
    description:
      'Unique user identifier'
  })
  userId: string;

  @ApiProperty({
    example: 10.8505,
    description:
      'Current latitude'
  })
  lat: number;

  @ApiProperty({
    example: 76.2711,
    description:
      'Current longitude'
  })
  lng: number;

  @ApiProperty({
    example:
      '2026-05-17T12:30:00.000Z',
    description:
      'ISO timestamp of location update'
  })
  timestamp: string;

}
