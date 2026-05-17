import { ApiProperty } from '@nestjs/swagger';

export class UpdateLocationDto {

  @ApiProperty({
    example: 'user_01HX92AAA111',
    description: 'Unique user identifier'
  })
  userId: string;

  @ApiProperty({
    example: 'trip_01HX92BBB222',
    description: 'Unique trip identifier'
  })
  tripId: string;

  @ApiProperty({
    example: 10.8505,
    description: 'Current latitude'
  })
  lat: number;

  @ApiProperty({
    example: 76.2711,
    description: 'Current longitude'
  })
  lng: number;

  @ApiProperty({
    example: 62,
    required: false,
    description: 'Vehicle speed in km/h'
  })
  speed?: number;

  @ApiProperty({
    example: 180,
    required: false,
    description:
      'Direction heading in degrees'
  })
  heading?: number;

  @ApiProperty({
    example: 5,
    required: false,
    description:
      'GPS accuracy radius in meters'
  })
  accuracy?: number;

}

export class LiveLocationDto {

  @ApiProperty({
    example: 'trip_01HX92CCC333',
    description: 'Unique trip identifier'
  })
  tripId: string;

  @ApiProperty({
    example: {
      lat: 10.8505,
      lng: 76.2711
    },
    description:
      'Current live coordinates'
  })
  currentLocation: {
    lat: number;
    lng: number;
  };

  @ApiProperty({
    example: 58,
    required: false,
    description:
      'Current moving speed in km/h'
  })
  speed?: number;

  @ApiProperty({
    example: 45,
    required: false,
    description:
      'Estimated arrival time in minutes'
  })
  eta?: number;

}
