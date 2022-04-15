import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import chalk from 'chalk';

export const accessLog = (req: Request, res: Response, next: NextFunction) => {
  const id = uuidv4();
  const { method, url } = req;
  const before = new Date().getTime();
  next();
  const after = new Date().getTime();
  const timeTaken = after - before;

  const idText = chalk.blue(`[${id}]`);
  const timeText = chalk.green(`${timeTaken} ms`);
  const dateText = chalk.yellow(`[${new Date().toLocaleString()}]`);
  console.log(
    `${idText}${dateText} ${method}: ${url} served after ${timeText}`
  );
};
