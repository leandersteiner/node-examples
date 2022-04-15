import { Movie } from '../../../domain/movie/Movie.js';
import { Review } from '../../../domain/review/Review.js';
import { ReviewRepository } from '../../../domain/review/ReviewRepository.js';

export class InMemoryReviewRepository implements ReviewRepository {
  private data: Review[] = [
    {
      id: 1,
      movieId: 1,
      user: 'John Doe',
      rating: 9,
      title: 'Greate Movie',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    {
      id: 2,
      movieId: 2,
      user: 'John Doe',
      rating: 9,
      title: 'Greate sequel to a great movie',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    }
  ];

  findById(id: number): Promise<Review | null> {
    return Promise.resolve(this.data.find(entity => entity.id === id) || null);
  }

  findForMovie(movie: Movie): Promise<Review[]> {
    return Promise.resolve(this.data.filter(entity => entity.id === movie.id));
  }

  delete(review: Review): Promise<Review> {
    this.data = this.data.filter(entity => entity !== review);
    return Promise.resolve(review);
  }

  add(review: Review): Promise<Review> {
    this.data.push(review);
    return Promise.resolve(review);
  }

  update(review: Review): Promise<Review> {
    this.delete(review);
    this.add(review);
    return Promise.resolve(review);
  }

  list(): Promise<Review[]> {
    return Promise.resolve(this.data);
  }
}
