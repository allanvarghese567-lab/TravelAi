import { Controller, Get } from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

import { AppService } from './app.service';

@ApiTags('App')
@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()

  @ApiOperation({
    summary: 'Application health check',
    description: 'Returns application running status',
  })

  @ApiResponse({
    status: 200,
    description: 'Application is running successfully',
    schema: {
      example: {
        success: true,
        message: 'Travel AI Platform Running',
      },
    },
  })

  getHello() {
    return this.appService.getHello();
  }

}
