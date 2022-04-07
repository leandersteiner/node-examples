import express from "express";
import { auth } from "./middleware/auth.js";
import { router as movieRouter } from "./movie/index.js";
import { router as reviewRouter } from "./review/index.js";

const port = process.env.PORT || 8082;

const server = express();

server.use(express.json());
server.use(auth);

server.use("/movies", movieRouter);
server.use("/reviews", reviewRouter);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
