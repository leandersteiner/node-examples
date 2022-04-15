import { Collection } from 'mongodb';
import { Movie } from '../../../domain/movie/Movie.js';
import { MovieRepository } from '../../../domain/movie/MovieRepository.js';
import { MongoConnection } from './MongoConnection.js';

export class MongoMovieRepository implements MovieRepository {
  private collection: Collection<Movie>;

  constructor(connection: MongoConnection) {
    this.collection = connection.db().collection<Movie>('Movie');
  }

  findByName(name: string): Promise<Movie | null> {
    return Promise.resolve(this.collection.findOne({ title: name }));
  }

  findById(id: number): Promise<Movie | null> {
    return Promise.resolve(this.collection.findOne({ id }));
  }

  delete(movie: Movie): Promise<Movie> {
    this.collection.deleteOne(movie);
    return Promise.resolve(movie);
  }

  add(movie: Movie): Promise<Movie> {
    this.collection.insertOne(movie);
    return Promise.resolve(movie);
  }

  update(movie: Movie): Promise<Movie> {
    this.delete(movie);
    this.add(movie);
    return Promise.resolve(movie);
  }

  async list(): Promise<Movie[]> {
    const docs = this.collection.find({});
    const movies = (await docs.toArray()) as Movie[];
    return movies;
  }
}
