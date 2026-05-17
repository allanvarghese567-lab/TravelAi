import { ApiProperty } from '@nestjs/swagger';

export class VehicleDto {

  @ApiProperty({
    example: 'car',
    enum: ['car', 'bike', 'ev', 'bus'],
    description: 'Vehicle type used for the trip'
  })
  type: 'car' | 'bike' | 'ev' | 'bus';

  @ApiProperty({
    example: 'Toyota',
    required: false,
    description: 'Vehicle brand name'
  })
  brand?: string;

  @ApiProperty({
    example: 'Innova Crysta',
    required: false,
    description: 'Vehicle model name'
  })
  model?: string;

}

export class CreateTripDto {

  @ApiProperty({
    example: 'One Day Munnar Trip',
    description: 'Trip title'
  })
  title: string;

  @ApiProperty({
    example: {
      lat: 10.8505,
      lng: 76.2711
    },
    description: 'Trip source coordinates'
  })
  source: {
    lat: number;
    lng: number;
  };

  @ApiProperty({
    example: {
      lat: 10.0889,
      lng: 77.0595
    },
    description: 'Trip destination coordinates'
  })
  destination: {
    lat: number;
    lng: number;
  };

  @ApiProperty({
    example: '2026-05-18',
    description: 'Planned trip date'
  })
  tripDate: string;

  @ApiProperty({
    example: '06:30 AM',
    description: 'Trip start time'
  })
  startTime: string;

  @ApiProperty({
    example: [
      'waterfalls',
      'breakfast',
      'tea plantations'
    ],
    description: 'Travel interests'
  })
  interests: string[];

  @ApiProperty({
    example: 5000,
    required: false,
    description: 'Estimated trip budget'
  })
  budget?: number;

}

export class UpdateTripDto {

  @ApiProperty({
    example: 'Updated Munnar Scenic Trip',
    required: false,
    description: 'Updated trip title'
  })
  title?: string;

  @ApiProperty({
    example: 6500,
    required: false,
    description: 'Updated budget'
  })
  budget?: number;

  @ApiProperty({
    example: 'completed',
    required: false,
    description: 'Trip status'
  })
  status?: string;

}

export class StartTripDto {

  @ApiProperty({
    example: 'trip_01HX92AAA111',
    description: 'Trip identifier'
  })
  tripId: string;

}

export class StopTripDto {

  @ApiProperty({
    example: 'trip_01HX92AAA111',
    description: 'Trip identifier'
  })
  tripId: string;

}
