import { ApiProperty } from '@nestjs/swagger';

export class PushNotificationDto {

  @ApiProperty({
    example: 'user_01HX92AAA111',
    description: 'Unique user identifier'
  })
  userId: string;

  @ApiProperty({
    example: 'Trip Reminder',
    description: 'Notification title'
  })
  title: string;

  @ApiProperty({
    example:
      'Your trip to Munnar starts in 30 minutes.',
    description: 'Notification message body'
  })
  body: string;

  @ApiProperty({
    example: {
      tripId: 'trip_01HX92BBB222',
      screen: 'trip-details'
    },
    required: false,
    description:
      'Additional custom notification payload'
  })
  data?: any;

}
