import { Request, Response } from 'express';

export interface ResourceController {
  create(req: Request, res: Response): void;
  read(req: Request, res: Response): void;
  update(req: Request, res: Response): void;
  delete(req: Request, res: Response): void;
  list(req: Request, res: Response): void;
}
