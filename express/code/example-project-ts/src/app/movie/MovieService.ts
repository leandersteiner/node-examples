import { MovieRepository } from '../../domain/movie/MovieRepository.js';

export class MovieService {
  constructor(private repository: MovieRepository) {}
}
