module.exports = (req, res, next) => {
  const isAdmin = req.headers.role;
  if (!isAdmin || isAdmin !== "Admin452545") {
    return res
      .status(403)
      .json({ message: "unAuth", data: "youre not the admin" });
  }
  next();
};
