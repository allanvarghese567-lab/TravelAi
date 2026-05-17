import { ApiProperty }
from '@nestjs/swagger';
export enum TripEvents {
  LOCATION_UPDATED = "location.updated",
  TRIP_CREATED = "trip.created",
  ITINERARY_UPDATED = "itinerary.updated",
}

export class LocationUpdatedEvent {
  tripId: string;
  userId: string;
  lat: number;
  lng: number;
  timestamp: string;
}
