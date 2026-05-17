import { Injectable }
from '@nestjs/common';

@Injectable()

export class TripService {

  private trips = [];

  createTrip(dto: any) {

    const trip = {

      id:
        Date.now().toString(),

      status:
        'planned',

      createdAt:
        new Date(),

      ...dto,

    };

    this.trips.push(trip);

    return trip;

  }

  getTrips() {

    return this.trips;

  }

  getTrip(id: string) {

    return this.trips.find(
      (t) => t.id === id,
    );

  }

  updateTrip(
    id: string,
    dto: any,
  ) {

    const trip =
      this.getTrip(id);

    if (!trip) {
      return null;
    }

    Object.assign(trip, dto);

    return trip;

  }

  deleteTrip(id: string) {

    this.trips =
      this.trips.filter(
        (t) => t.id !== id,
      );

    return {
      success: true,
    };

  }

  startTrip(id: string) {

    const trip =
      this.getTrip(id);

    if (!trip) {
      return null;
    }

    trip.status = 'started';

    trip.startedAt =
      new Date();

    return trip;

  }

  stopTrip(id: string) {

    const trip =
      this.getTrip(id);

    if (!trip) {
      return null;
    }

    trip.status = 'completed';

    trip.completedAt =
      new Date();

    return trip;

  }

}
