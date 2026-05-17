import { Controller, Get } from '@nestjs/common';

import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
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
    summary: 'Get application status',
  })

  @ApiOkResponse({
    description: 'Application status response',
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
