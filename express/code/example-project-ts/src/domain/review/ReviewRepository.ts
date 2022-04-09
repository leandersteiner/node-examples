import { Repository } from '../../infra/db/Repository';
import { Review } from './Review';

export interface ReviewRepository extends Repository<Review> {
  findByName(name: string): Promise<Review>;
}
