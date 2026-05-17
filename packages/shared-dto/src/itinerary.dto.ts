import { ApiProperty } from '@nestjs/swagger';

export class PlaceDto {

  @ApiProperty({
    example: 'place_01HX92AAA111',
    description: 'Unique place identifier'
  })
  id: string;

  @ApiProperty({
    example: 'Cheeyappara Waterfalls',
    description: 'Place title or name'
  })
  title: string;

  @ApiProperty({
    example: 'waterfall',
    description: 'Place category'
  })
  category: string;

  @ApiProperty({
    example: 10.1712,
    description: 'Latitude of the place'
  })
  latitude: number;

  @ApiProperty({
    example: 76.6947,
    description: 'Longitude of the place'
  })
  longitude: number;

  @ApiProperty({
    example: 4.7,
    required: false,
    description: 'Average place rating'
  })
  rating?: number;

}

export class ItineraryStopDto {

  @ApiProperty({
    example: 'stop_01HX92BBB222',
    description: 'Unique itinerary stop identifier'
  })
  id: string;

  @ApiProperty({
    example: 'breakfast',
    description: 'Stop type'
  })
  type: string;

  @ApiProperty({
    type: PlaceDto,
    description: 'Place details for the stop'
  })
  place: PlaceDto;

  @ApiProperty({
    example: '2026-05-18T08:30:00.000Z',
    required: false,
    description: 'Expected arrival time'
  })
  arrivalTime?: string;

  @ApiProperty({
    example: '2026-05-18T09:15:00.000Z',
    required: false,
    description: 'Expected departure time'
  })
  departureTime?: string;

  @ApiProperty({
    example: 45,
    required: false,
    description: 'Stop duration in minutes'
  })
  durationMinutes?: number;

}

export class CreateItineraryDto {

  @ApiProperty({
    example: 'trip_01HX92CCC333',
    description: 'Trip identifier'
  })
  tripId: string;

  @ApiProperty({
    type: [ItineraryStopDto],
    description: 'List of itinerary stops'
  })
  stops: ItineraryStopDto[];

}

export class OptimizeItineraryDto {

  @ApiProperty({
    example: 'trip_01HX92DDD444',
    description: 'Trip identifier'
  })
  tripId: string;

  @ApiProperty({
    example: 10.8505,
    description: 'Current user latitude'
  })
  currentLat: number;

  @ApiProperty({
    example: 76.2711,
    description: 'Current user longitude'
  })
  currentLng: number;

  @ApiProperty({
    example: 20,
    required: false,
    description:
      'Delay in minutes affecting itinerary'
  })
  delayMinutes?: number;

}
