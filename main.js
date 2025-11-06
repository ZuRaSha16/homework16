const express = require("express");
const apiRouter = require("./api/api");
const secretRouter = require("./secret/secret.route");
const logger = require("./middleware/logger.middleware");
const app = express();
const PORT = 5001;
app.use(express.json());
app.use(logger);

app.use("/api", apiRouter);
app.use("/secret", secretRouter);

app.get("/", (req, res) => {
  res.json("this is api request");
});

app.listen(PORT, () => {
  console.log(`serve runnning on http://localhost:${PORT}`);
});
