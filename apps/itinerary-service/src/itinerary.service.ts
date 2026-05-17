import { Injectable }
from '@nestjs/common';

@Injectable()

export class ItineraryService {

  create(dto: any) {

    return {

      success: true,

      itinerary: dto,

    };

  }

}
