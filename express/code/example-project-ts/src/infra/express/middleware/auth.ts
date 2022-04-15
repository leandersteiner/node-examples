import { Request, Response, NextFunction } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.get('X-TOKEN');
  if (token != 'SECRET') {
    return res.status(401).json({ error: 'invalid token' });
  }
  next();
};
