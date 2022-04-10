import { Movie } from '../../domain/movie/Movie.js';
import { MovieRepository } from '../../domain/movie/MovieRepository.js';

export class MovieService {
  constructor(private repository: MovieRepository) {}

  public getAll(): Promise<Movie[]> {
    return this.repository.list();
  }

  public get(id: number): Promise<Movie | null> {
    return this.repository.findById(id);
  }

  public create(movie: Movie): void {
    this.repository.add(movie);
  }

  public delete(movie: Movie): void {
    this.repository.delete(movie);
  }
}
