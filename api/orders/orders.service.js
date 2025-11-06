const orders = [
  {
    id: 1,
    productName: "milk",
    quantity: 2,
    totalPrice: 100,
    status: "pending",
  },
  {
    id: 2,
    productName: "bread",
    quantity: 1,
    totalPrice: 50,
    status: "completed",
  },
  {
    id: 3,
    productName: "apple",
    quantity: 5,
    totalPrice: 200,
    status: "pending",
  },
];

const pagination = (req, res) => {
  let { page = 1, take = 3 } = req.query;
  take = take > 4 ? 4 : Number(take);
  page = Number(page);
  const start = (page - 1) * take;
  const end = page * take;
  res.json({ message: "success", data: orders.slice(start, end) });
};

const getById = (req, res) => {
  const { id } = req.params;
  const order = orders.find((o) => o.id === Number(id));
  if (!order) return res.status(404).json({ message: "not found", data: null });
  res.json({ message: "success", data: order });
};

const createOrder = (req, res) => {
  const { productName, quantity, totalPrice, status } = req.body;
  if (!productName)
    return res.status(400).json({ message: "product productName is required" });
  if (quantity > 10 || totalPrice > 500)
    return res.status(400).json({ message: "Invalid quantity or totalPrice" });
  const lastID = orders[orders.length - 1]?.id || 0;
  const newOrder = {
    id: lastID + 1,
    productName,
    quantity,
    totalPrice,
    status,
  };
  orders.push(newOrder);
  res.json({ message: "added successfully", data: newOrder });
};

const updateOrder = (req, res) => {
  const { id } = req.params;
  const { productName, quantity, totalPrice, status } = req.body;
  const index = orders.findIndex((o) => o.id === Number(id));
  if (index === -1) return res.status(404).json({ message: "id invalid" });
  if (quantity > 10 || totalPrice > 500)
    return res.status(400).json({ message: "Invalid quantity or totalPrice" });

  orders[index] = {
    ...orders[index],
    productName: productName ?? orders[index].productName,
    quantity: quantity ?? orders[index].quantity,
    totalPrice: totalPrice ?? orders[index].totalPrice,
    status: status ?? orders[index].status,
  };
  res.json({ message: "updated successfully", data: orders[index] });
};

const updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const index = orders.findIndex((o) => o.id === Number(id));
  if (index === -1) return res.status(404).json({ message: "id invalid" });
  orders[index].status = status ?? orders[index].status;
  res.json({ message: "status updated", data: orders[index] });
};

const deleteOrder = (req, res) => {
  const { id } = req.params;
  const index = orders.findIndex((o) => o.id === Number(id));
  if (index === -1) return res.status(404).json({ message: "id invalid" });
  const deleted = orders.splice(index, 1);
  res.json({ message: "deleted successfully", data: deleted });
};

const secretRoute = (req, res) => {
  res.json({ message: "This is a secret route" });
};

module.exports = {
  pagination,
  getById,
  createOrder,
  updateOrder,
  deleteOrder,
  updateStatus,
  secretRoute,
};
