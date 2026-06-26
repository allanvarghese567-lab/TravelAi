import { Controller, Post, Body, Get, Headers, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProxyService } from '../services/proxy.service';
import { LoginDto } from '../dto/auth/login.dto';
import { RegisterDto } from '../dto/auth/register.dto';
import { AuthGuard } from '../guards/auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly proxy: ProxyService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login user (proxied to auth-service)' })
  async login(@Body() body: LoginDto) {
    return this.proxy.authPost('/login', body);
  }

  @Post('register')
  @ApiOperation({ summary: 'Register user (proxied to auth-service)' })
  async register(@Body() body: RegisterDto) {
    return this.proxy.authPost('/register', body);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get current user (proxied, requires Authorization header)' })
  async me(@Headers('authorization') authHeader: string, @Body() _body: any, @Body('') __: any) {
    // AuthGuard already attached user to request; proxy directly to auth-service to keep behaviour consistent
    return this.proxy.authGet('/me', { Authorization: authHeader });
  }
}
