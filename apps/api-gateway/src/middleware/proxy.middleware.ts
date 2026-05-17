import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { services } from '../config/services';

function getServiceKey(path: string): keyof typeof services | null {
  if (path.startsWith('/auth')) return 'auth';
  if (path.startsWith('/location')) return 'location';
  if (path.startsWith('/itinerary')) return 'itinerary';
  if (path.startsWith('/recommendation')) return 'recommendation';

  return null;
}

export async function proxyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const serviceKey = getServiceKey(req.path);

  if (!serviceKey) return next();

  const target = services[serviceKey];

  if (!target) {
    return res.status(500).json({ error: 'Service not configured' });
  }

  try {
    const response = await axios({
      method: req.method as any,
      url: `${target}${req.originalUrl}`,
      data: req.body,
      headers: {
        ...req.headers,
        host: undefined,
      },
    });

    return res.status(response.status).json(response.data);
  } catch (error: any) {
    return res.status(error?.response?.status || 500).json({
      error: error.message,
    });
  }
}