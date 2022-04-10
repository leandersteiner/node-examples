import { Movie } from '../../domain/movie/Movie.js';
import { MovieRepository } from '../../domain/movie/MovieRepository.js';

export class InMemoryMovieRepository implements MovieRepository {
  private data: Movie[] = [
    {
      id: 1,
      title: 'The Lord of the Rings - The Fellowship of the Ring',
      year: 2001,
    },
    {
      id: 2,
      title: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
  ];

  findByName(name: string): Promise<Movie | null> {
    return Promise.resolve(
      this.data.find(movie => movie.title.includes(name)) || null
    );
  }

  findById(id: number): Promise<Movie | null> {
    return Promise.resolve(this.data.find(entity => entity.id === id) || null);
  }

  delete(movie: Movie): Promise<Movie> {
    this.data = this.data.filter(entity => entity !== movie);
    return Promise.resolve(movie);
  }

  add(movie: Movie): Promise<Movie> {
    this.data.push(movie);
    return Promise.resolve(movie);
  }

  update(movie: Movie): Promise<Movie> {
    this.delete(movie);
    this.add(movie);
    return Promise.resolve(movie);
  }

  list(): Promise<Movie[]> {
    return Promise.resolve(this.data);
  }
}
