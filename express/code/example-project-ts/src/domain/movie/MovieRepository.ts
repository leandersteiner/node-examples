import { Repository } from '../../infra/db/Repository.js';
import { Movie } from './Movie.js';

export interface MovieRepository extends Repository<Movie> {
  findByName(name: string): Promise<Movie | null>;
}
