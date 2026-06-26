import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ProxyService } from '../services/proxy.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly proxy: ProxyService) {}

  async canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    const auth = req.headers?.authorization;
    if (!auth) throw new UnauthorizedException('Missing Authorization header');

    try {
      const user = await this.proxy.authGet('/me', { Authorization: auth });
      // attach user to request for controllers
      req.user = user;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
