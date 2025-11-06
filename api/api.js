const { Router } = require("express");
const ordersRouter = require("./orders/orders.route");

const apiRouter = Router();

apiRouter.use("/orders", ordersRouter);
apiRouter.get("/", (req, res) => {
  res.send("this is api router");
});

module.exports = apiRouter;
