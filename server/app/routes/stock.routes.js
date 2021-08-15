module.exports = (app) => {
  const stocks = require("../controllers/stock.controller.js");

  var router = require("express").Router();

  // Create a new stock
  router.post("/", stocks.create);

  // Retrieve all stocks
  router.get("/", stocks.findAll);

  // Retrieve a single stock with id
  router.get("/:id", stocks.findOne);

  app.use("/api/stocks", router);
};
