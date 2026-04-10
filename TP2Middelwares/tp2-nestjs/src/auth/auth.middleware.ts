import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
 use(req: Request, res: Response, next: NextFunction) {
  if (!['POST', 'PATCH', 'DELETE'].includes(req.method)) {
    return next();
  }

  const token = req.headers['auth-user'] as string;
  if (!token) {
    return res.status(401).json({ message: 'Header "auth-user" manquant.' });
  }

  try {
    
    const decoded = verify(token, 'secret') as any;

    if (!decoded || !decoded.userId) {
      return res.status(401).json({ message: 'Token invalide : userId absent.' });
    }

    (req as any).userId = decoded.userId;
    next();
  } catch (err) {
    console.error('Erreur JWT décodage:', err.message);
    return res.status(401).json({ message: 'Token JWT invalide ou expiré.' });
  }
}}