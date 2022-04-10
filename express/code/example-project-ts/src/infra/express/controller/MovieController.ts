import { Request, Response } from 'express';
import { MovieService } from '../../../app/movie/MovieService.js';
import { ReviewService } from '../../../app/review/ReviewService.js';
import { ResourceController } from './ResourceController.js';

export class MovieController implements ResourceController {
  constructor(
    private movieService: MovieService,
    private reviewService: ReviewService
  ) {}

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
