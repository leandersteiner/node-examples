import express, { Router } from 'express';
import { MovieController } from '../controller/MovieController.js';

export class MovieRouter {
  private router = Router();

  constructor(private controller: MovieController) {
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
