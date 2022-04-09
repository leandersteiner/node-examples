import { Entity } from '../../infra/db/Entity';

export interface Review extends Entity<number> {
  movieId: number;
  user: string;
  rating: number;
  title: string;
  content: string;
}
