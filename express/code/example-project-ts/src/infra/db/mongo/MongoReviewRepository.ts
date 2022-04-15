import { Collection } from 'mongodb';
import { Movie } from '../../../domain/movie/Movie.js';
import { Review } from '../../../domain/review/Review.js';
import { ReviewRepository } from '../../../domain/review/ReviewRepository.js';
import { MongoConnection } from './MongoConnection.js';

export class MongoReviewRepository implements ReviewRepository {
  private collection: Collection<Review>;

  constructor(connection: MongoConnection) {
    this.collection = connection.db().collection<Review>('Review');
  }

  async findForMovie(movie: Movie): Promise<Review[]> {
    const docs = this.collection.find({ movieId: movie.id });
    const reviews = (await docs.toArray()) as Review[];
    return reviews;
  }

  findById(id: number): Promise<Review | null> {
    return Promise.resolve(this.collection.findOne({ id }));
  }

  delete(review: Review): Promise<Review> {
    this.collection.deleteOne(review);
    return Promise.resolve(review);
  }

  add(review: Review): Promise<Review> {
    this.collection.insertOne(review);
    return Promise.resolve(review);
  }

  update(review: Review): Promise<Review> {
    this.delete(review);
    this.add(review);
    return Promise.resolve(review);
  }

  async list(): Promise<Review[]> {
    const docs = this.collection.find({});
    const reviews = (await docs.toArray()) as Review[];
    return reviews;
  }
}
