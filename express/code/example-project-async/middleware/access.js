export const accessLog = (req, res, next) => {
  const url = req.url;
  const before = new Date().getTime();
  next();
  const after = new Date().getTime();
  const timeTaken = after - before;
  console.log(`${req.method} request to ${url} served after ${timeTaken} ms`);
};
