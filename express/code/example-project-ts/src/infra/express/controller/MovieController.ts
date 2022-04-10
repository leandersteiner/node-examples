import { Request, Response } from 'express';
import { MovieService } from '../../../app/movie/MovieService.js';
import { ReviewService } from '../../../app/review/ReviewService.js';
import { ResourceController } from './ResourceController.js';

export class MovieController implements ResourceController {
  constructor(
    private movieService: MovieService,
    private reviewService: ReviewService
  ) {}

  create = (req: Request, res: Response): void => {
    this.movieService.create(req.body);
    res.json({ status: 'ok' });
  };

  read = async (req: Request, res: Response): Promise<void> => {
    const movie = await this.movieService.get(Number(req.params.id));
    if (movie === null) {
      res.json({ status: 'error: not found' });
      return;
    }
    const reviews = await this.reviewService.getForMovie(movie);
    res.json({
      movie,
      reviews
    });
  };

  update(req: Request, res: Response): void {
    const body = req.body;
    res.json(body);
  }

  delete = async (req: Request, res: Response): Promise<void> => {
    const movie = await this.movieService.get(Number(req.params.id));
    if (movie) {
      this.movieService.delete(movie);
      res.json({ status: 'ok' });
    }
    res.json({ status: 'error: not found' });
  };

  list = async (req: Request, res: Response): Promise<void> => {
    res.json(await this.movieService.getAll());
  };
}
