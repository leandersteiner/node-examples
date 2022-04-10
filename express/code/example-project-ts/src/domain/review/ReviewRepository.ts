import { Repository } from '../../infra/db/Repository.js';
import { Movie } from '../movie/Movie.js';
import { Review } from './Review.js';

export interface ReviewRepository extends Repository<Review> {
  findForMovie(movie: Movie): Promise<Review[]>;
}
