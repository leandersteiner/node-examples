import { MovieService } from './app/movie/MovieService.js';
import { ReviewService } from './app/review/ReviewService.js';
import { InMemoryMovieRepository } from './infra/db/InMemoryMovieRepository.js';
import { InMemoryReviewRepository } from './infra/db/InMemoryReviewRepository.js';
import { MovieController } from './infra/express/controller/MovieController.js';
import { ReviewController } from './infra/express/controller/ReviewController.js';
import { MovieRouter } from './infra/express/router/MovieRouter.js';
import { ReviewRouter } from './infra/express/router/ReviewRouter.js';
import { Server } from './infra/express/server/Server.js';

const server = new Server();

const movieRepository = new InMemoryMovieRepository();
const reviewRepository = new InMemoryReviewRepository();

const movieService = new MovieService(movieRepository);
const reviewService = new ReviewService(reviewRepository);

const movieController = new MovieController(movieService, reviewService);
const reviewController = new ReviewController(reviewService);

const movieRouter = new MovieRouter(movieController);
const reviewRouter = new ReviewRouter(reviewController);

server
  .useRouter('/movies', movieRouter.get())
  .useRouter('/reviews', reviewRouter.get())
  .start();
