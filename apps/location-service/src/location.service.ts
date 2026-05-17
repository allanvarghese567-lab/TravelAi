import { Injectable }
from '@nestjs/common';

@Injectable()

export class LocationService {

  update(dto: any) {

    return {

      success: true,

      location: dto,

    };

  }

}
