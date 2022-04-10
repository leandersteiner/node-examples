import express, { Router } from 'express';
import { ReviewController } from '../controller/ReviewController.js';

export class ReviewRouter {
  private router = Router();

  constructor(private controller: ReviewController) {
    this.router.get('/', this.controller.list);
    this.router.get('/:id', this.controller.read);
    this.router.post('/', this.controller.create);
    this.router.patch('/:id', this.controller.update);
    this.router.delete('/:id', this.controller.delete);
  }

  public get(): express.Router {
    return this.router;
  }
}
