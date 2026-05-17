export type Session = {
  sessionId: string;
  userId: string;
  email: string;
  role: string;
  createdAt: number;
};


export class SessionStore {
  private static sessions = new Map<string, Session>();

  static create(session: Session) {
    this.sessions.set(session.sessionId, session);
    return session;
  }

  static get(sessionId: string) {
    return this.sessions.get(sessionId);
  }

  static delete(sessionId: string) {
    this.sessions.delete(sessionId);
  }

  static isValid(sessionId: string) {
    return this.sessions.has(sessionId);
  }
}