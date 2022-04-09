import { MovieRouter } from './infra/express/router/MovieRouter.js';
import { ReviewRouter } from './infra/express/router/ReviewRouter.js';
import { Server } from './infra/express/server/Server.js';

const server = new Server();

const movieRouter = new MovieRouter();
const reviewRouter = new ReviewRouter();

server
  .use(movieRouter.get())
  .use(reviewRouter.get())
  .start()
  .then(() => console.log('Server runnng'));
