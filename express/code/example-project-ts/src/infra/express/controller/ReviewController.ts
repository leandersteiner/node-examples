import { Request, Response } from 'express';
import { ReviewService } from '../../../app/review/ReviewService.js';
import { ResourceController } from './ResourceController.js';

export class ReviewController implements ResourceController {
  constructor(private reviewService: ReviewService) {}

  create = (req: Request, res: Response): void => {
    this.reviewService.create(req.body);
    res.json({ status: 'ok' });
  };

  read = async (req: Request, res: Response): Promise<void> => {
    res.json(await this.reviewService.get(Number(req.params.id)));
  };

  update = (req: Request, res: Response): void => {
    const body = req.body;
    res.json = body;
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    const review = await this.reviewService.get(Number(req.params.id));
    if (review) {
      this.reviewService.delete(review);
      res.json({ status: 'ok' });
    }
    res.json({ status: 'error: not found' });
  };

  list = async (req: Request, res: Response): Promise<void> => {
    res.json(await this.reviewService.getAll());
  };
}
