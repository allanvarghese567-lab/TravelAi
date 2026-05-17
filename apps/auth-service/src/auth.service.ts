import { SessionStore, Session,AuthRole } from '@shared/index';
import { generateSessionId } from '@shared/index';
import { Injectable }
from '@nestjs/common';
@Injectable()
export class AuthService {
  async login(email: string, password: string) {

    const sessionId = generateSessionId();

    const user: Session = {
      sessionId,
      userId: '1',
      email: email,
      role: AuthRole.user,
      createdAt: Date.now(),
    };

    SessionStore.create(user);

    return {
      sessionId,
    };
  }
};