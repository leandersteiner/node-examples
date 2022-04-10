import { Review } from '../../domain/review/Review.js';
import { ReviewRepository } from '../../domain/review/ReviewRepository.js';

export class ReviewService {
  constructor(private repository: ReviewRepository) {}

  public getAll(): Promise<Review[]> {
    return this.repository.list();
  }

  public get(id: number): Promise<Review | null> {
    return this.repository.findById(id);
  }

  public create(review: Review): void {
    this.repository.add(review);
  }

  public delete(review: Review): void {
    this.repository.delete(review);
  }
}
