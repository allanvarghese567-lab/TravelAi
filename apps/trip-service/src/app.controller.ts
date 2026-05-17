import { Controller, Get } from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

import { AppService } from './app.service';

@ApiTags('Application')
@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService,
  ) {}

  @Get()

  @ApiOperation({
    summary: 'Application health endpoint',
    description: 'Checks whether the backend is running',
  })

  @ApiResponse({
    status: 200,
    description: 'Backend running successfully',
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
