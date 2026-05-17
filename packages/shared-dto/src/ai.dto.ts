import { ApiProperty } from '@nestjs/swagger';

export class AITripRequestDto {

  @ApiProperty({
    example: 'Kochi',
    description: 'Trip starting location'
  })
  source: string;

  @ApiProperty({
    example: 'Munnar',
    description: 'Trip destination location'
  })
  destination: string;

  @ApiProperty({
    example: [
      'waterfalls',
      'tea plantations',
      'scenic drives'
    ],
    description:
      'User travel interests'
  })
  interests: string[];

  @ApiProperty({
    example: 5000,
    required: false,
    description:
      'Estimated trip budget'
  })
  budget?: number;

}

export class AITripResponseDto {

  @ApiProperty({
    example:
      'One day scenic trip from Kochi to Munnar',
    description:
      'AI generated trip summary'
  })
  summary: string;

  @ApiProperty({
    example: 4200,
    description:
      'Estimated total trip cost'
  })
  estimatedBudget: number;

  @ApiProperty({

    example: [

      {
        time: '08:00 AM',
        activity: 'Breakfast at Aryas Hotel'
      },

      {
        time: '10:30 AM',
        activity: 'Visit Cheeyappara Waterfalls'
      }

    ],

    description:
      'Generated itinerary plan'

  })
  itinerary: any[];

}
