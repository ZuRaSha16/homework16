const { Router } = require("express");
const isValidAPiKeyMiddleware = require("../middleware/isValidAPiKey.middleware");

const secretRouter = Router();

secretRouter.get("/", isValidAPiKeyMiddleware, (req, res) => {
  res.json("secret info");
});

module.exports = secretRouter;
