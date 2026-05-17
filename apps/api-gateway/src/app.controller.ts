import {

  Controller,
  Get

} from '@nestjs/common';

import {

  ApiTags,
  ApiOperation,
  ApiResponse

} from '@nestjs/swagger';

import { AppService }
from './app.service';

@ApiTags('Health')

@Controller()

export class AppController {

  constructor(

    private readonly appService:
      AppService

  ) {}

  @Get()

  @ApiOperation({
    summary:
      'Application health check'
  })

  @ApiResponse({
    status: 200,
    description:
      'Application is running successfully'
  })

  getHello() {

    return this.appService.getHello();

  }

}
