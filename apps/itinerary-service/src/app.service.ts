import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      service: 'itinerary-service',
      status: 'running'
    };
  }
}