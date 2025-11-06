const { Router } = require("express");
const {
  pagination,
  getById,
  deleteOrder,
  updateOrder,
  updateStatus,
  createOrder,
} = require("./orders.service");
const isAdminMiddleware = require("../../middleware/isAdmin.middleware");
const isEditorMiddleware = require("../../middleware/isEditor.middleware");
const isValidAPiKeyMiddleware = require("../../middleware/isValidAPiKey.middleware");
const loggerMiddleware = require("../../middleware/logger.middleware");

const ordersRouter = Router();

ordersRouter.use(loggerMiddleware);

ordersRouter.get("/", isValidAPiKeyMiddleware, pagination);
ordersRouter.get("/:id", getById);
ordersRouter.post("/", createOrder);
ordersRouter.delete("/:id", isAdminMiddleware, deleteOrder);
ordersRouter.put("/:id", isAdminMiddleware, updateOrder);
ordersRouter.patch("/:id/status", isEditorMiddleware, updateStatus);

module.exports = ordersRouter;
