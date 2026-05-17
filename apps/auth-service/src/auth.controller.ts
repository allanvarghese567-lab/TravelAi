import {

  Body,
  Controller,
  Post,

} from '@nestjs/common';

import {

  ApiOperation,
  ApiTags,

} from '@nestjs/swagger';

import { AuthService }
from './auth.service';

import {

  LoginDto,
  SignupDto,

} from '@travel-ai/shared-dto';

@ApiTags('Auth')

@Controller('auth')

export class AuthController {

  constructor(

    private readonly authService:
      AuthService,

  ) {}

  @Post('signup')

  @ApiOperation({
    summary:
      'User Signup',
  })

  signup(

    @Body()
    dto: SignupDto,

  ) {

    return this.authService
      .signup(dto);

  }

  @Post('login')

  @ApiOperation({
    summary:
      'User Login',
  })

  login(

    @Body()
    dto: LoginDto,

  ) {

    return this.authService
      .login(dto);

  }

}
