import { MovieService } from './app/movie/MovieService.js';
import { ReviewService } from './app/review/ReviewService.js';
import { InMemoryMovieRepository } from './infra/db/memory/InMemoryMovieRepository.js';
import { InMemoryReviewRepository } from './infra/db/memory/InMemoryReviewRepository.js';
import { MongoConnection } from './infra/db/mongo/MongoConnection.js';
import { MongoMovieRepository } from './infra/db/mongo/MongoMovieRepository.js';
import { MongoReviewRepository } from './infra/db/mongo/MongoReviewRepository.js';
import { MovieController } from './infra/express/controller/MovieController.js';
import { ReviewController } from './infra/express/controller/ReviewController.js';
import { accessLog } from './infra/express/middleware/access.js';
import { auth } from './infra/express/middleware/auth.js';
import { MovieRouter } from './infra/express/router/MovieRouter.js';
import { ReviewRouter } from './infra/express/router/ReviewRouter.js';
import { Server } from './infra/express/server/Server.js';

const server = new Server();

const movieRepository = new InMemoryMovieRepository();
const reviewRepository = new InMemoryReviewRepository();

const mongoConnection = new MongoConnection(
  'mongodb://mongo:mongo@localhost:27017/?authMechanism=DEFAULT',
  'movies'
);
const mongoMovieRepository = new MongoMovieRepository(mongoConnection);
const mongoReviewRepository = new MongoReviewRepository(mongoConnection);

const movieService = new MovieService(mongoMovieRepository);
const reviewService = new ReviewService(mongoReviewRepository);

const movieController = new MovieController(movieService, reviewService);
const reviewController = new ReviewController(reviewService);

const movieRouter = new MovieRouter(movieController);
const reviewRouter = new ReviewRouter(reviewController);

server
  .useMiddleware(accessLog)
  .useMiddleware(auth)
  .useRouter('/movies', movieRouter.get())
  .useRouter('/reviews', reviewRouter.get())
  .start();
