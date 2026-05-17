import { ApiProperty } from '@nestjs/swagger';

export class RecommendationRequestDto {

  @ApiProperty({
    example: 'trip_01HX92AAA111',
    description: 'Unique trip identifier'
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
    example: [
      'restaurant',
      'waterfall',
      'viewpoint'
    ],
    required: false,
    description:
      'Preferred recommendation categories'
  })
  categories?: string[];

  @ApiProperty({
    example: 10,
    required: false,
    description:
      'Maximum number of recommendations'
  })
  limit?: number;

}

export class RecommendationResponseDto {

  @ApiProperty({
    example: [

      {
        id: 'place_01',
        title: 'Cheeyappara Waterfalls',
        category: 'waterfall',
        rating: 4.7
      },

      {
        id: 'place_02',
        title: 'Saravana Bhavan',
        category: 'restaurant',
        rating: 4.5
      }

    ],

    description:
      'Recommended nearby places'

  })
  places: any[];

}
