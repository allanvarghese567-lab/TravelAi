import { ApiProperty }
from '@nestjs/swagger';
export class UpdateLocationDto {
  userId: string;
  tripId: string;
  lat: number;
  lng: number;
  speed?: number;
  heading?: number;
  accuracy?: number;
}

export class LiveLocationDto {
  tripId: string;
  currentLocation: {
    lat: number;
    lng: number;
  };
  speed?: number;
  eta?: number;
}
