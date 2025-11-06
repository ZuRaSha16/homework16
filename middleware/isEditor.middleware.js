module.exports = (req, res, next) => {
  const isEditor = req.headers.role;
  if (!isEditor || isEditor !== "Editor452545") {
    return res
      .status(403)
      .json({ message: "unAuth", data: "youre not the editor" });
  }
  next();
};
