import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      service: 'api-gateway',
      status: 'running'
    };
  }
}