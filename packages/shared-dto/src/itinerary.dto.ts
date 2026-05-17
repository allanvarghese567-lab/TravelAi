export class PlaceDto {
  id: string;
  title: string;
  category: string;
  latitude: number;
  longitude: number;
  rating?: number;
}

export class ItineraryStopDto {
  id: string;
  type: string;
  place: PlaceDto;
  arrivalTime?: string;
  departureTime?: string;
  durationMinutes?: number;
}

export class CreateItineraryDto {
  tripId: string;
  stops: ItineraryStopDto[];
}

export class OptimizeItineraryDto {
  tripId: string;
  currentLat: number;
  currentLng: number;
  delayMinutes?: number;
}
