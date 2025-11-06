function logger(req, res, next) {
  console.log(req.method, new Date().toISOString());
  next();
}

module.exports = logger;
