module.exports = (req, res, next) => {
  const secretKey = req.headers.secret;
  if (!secretKey || secretKey !== "452545") {
    return res
      .status(403)
      .json({ message: "unauth", data: "cant give access to the info" });
  }
  next();
};
