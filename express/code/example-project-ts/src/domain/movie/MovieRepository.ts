import { Repository } from '../../infra/db/Repository';
import { Movie } from './Movie';

export interface MovieRepository extends Repository<Movie> {
  findByName(name: string): Promise<Movie>;
}
