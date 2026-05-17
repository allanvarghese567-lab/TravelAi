import { Injectable }
from '@nestjs/common';

@Injectable()

export class RecommendationService {

  recommend(dto: any) {

    return {

      success: true,

      recommendations: [],

      request: dto,

    };

  }

}
