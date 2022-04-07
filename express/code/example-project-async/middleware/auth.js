export const auth = (req, res, next) => {
  const token = req.get("X-TOKEN");
  if (token != "SECRET") {
    return res.status(401).json({ error: "invalid token" });
  }
  next();
};
