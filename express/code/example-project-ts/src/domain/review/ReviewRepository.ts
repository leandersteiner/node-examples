import { Repository } from '../../infra/db/Repository.js';
import { Review } from './Review.js';

export interface ReviewRepository extends Repository<Review> {}
