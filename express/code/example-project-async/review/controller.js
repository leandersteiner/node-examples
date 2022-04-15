import { ReviewList } from './model.js';

export class ReviewController {
  constructor() {
    this.model = new ReviewList();
  }

  list = async (req, res) => {
    res.json(await this.model.getAll());
  };

  create = async (req, res) => {
    const entity = req.body;
    await this.model.add(entity);
    res.json(entity);
  };

  read = async (req, res) => {
    const id = Number(req.params.id);
    res.json(await this.model.get(id));
  };

  update = async (req, res) => {
    const id = Number(req.params.id);
    const entity = req.body;
    await this.model.update(id, entity);
    res.json(entity);
  };

  remove = async (req, res) => {
    const id = Number(req.params.id);
    await this.model.remove(id);
  };
}
