import { Request, Response } from 'express';
import { ResourceController } from './ResourceController';

export class MovieController implements ResourceController {
  create(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
  }
  read(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
  }
  update(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
  }
  delete(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
  }
  list(req: Request, res: Response): void {
    throw new Error('Method not implemented.');
  }
}
