import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import{ServiceConstants} from '@shared/index';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const publicPaths = ['/auth/login', '/auth/register', '/docs'];

  if (publicPaths.includes(req.path)) return next();

  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Missing token' });
  }

  try {
    jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET!);
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
}