export class VehicleDto {
  type: 'car' | 'bike' | 'ev' | 'bus';
  brand?: string;
  model?: string;
}

export class CreateTripDto {
  title: string;

  source: {
    lat: number;
    lng: number;
  };

  destination: {
    lat: number;
    lng: number;
  };

  tripDate: string;
  startTime: string;
  interests: string[];
  budget?: number;
}

export class UpdateTripDto {
  title?: string;
  budget?: number;
  status?: string;
}

export class StartTripDto {
  tripId: string;
}

export class StopTripDto {
  tripId: string;
}
