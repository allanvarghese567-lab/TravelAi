import { Injectable }
from '@nestjs/common';

@Injectable()

export class AuthService {

  signup(dto: any) {

    return {

      success: true,

      message:
        'User registered',

      user: dto,

    };

  }

  login(dto: any) {

    return {

      success: true,

      token:
        'jwt-token',

      user: dto.email,

    };

  }

}
