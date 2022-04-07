import { MovieList } from "./model.js";
import axios from "axios";

export class MovieController {
  constructor() {
    this.model = new MovieList();
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

  readWithReviews = async (req, res) => {
    const id = Number(req.params.id);
    const movie = await this.model.get(id);
    const reviewsReq = await axios.get(`http://localhost:8082/reviews/${id}`);
    const reviews = reviewsReq.data;
    const response = {
      movie,
      reviews,
    };
    res.json(response);
  };
}
