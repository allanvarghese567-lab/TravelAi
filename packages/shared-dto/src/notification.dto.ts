import { ApiProperty }
from '@nestjs/swagger';
export class PushNotificationDto {
  userId: string;
  title: string;
  body: string;
  data?: any;
}
