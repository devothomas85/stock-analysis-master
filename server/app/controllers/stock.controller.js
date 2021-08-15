const db = require("../models");
const Stock = db.stocks;
const Op = db.Sequelize.Op;

// Create and Save a new stock details
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a stock
  const stock = {
    name: req.body.name,
    curr_market_price: req.body.curr_market_price,
    market_cap: req.body.market_cap,
    stock_pe: req.body.stock_pe,
    divident_yield: req.body.divident_yield,
    roce: req.body.roce,
    roe_pre_annum: req.body.roe_pre_annum,
    debt_to_equity: req.body.debt_to_equity,
    eps: req.body.eps,
    reserves: req.body.reserves,
    debt: req.body.debt,
  };

  // Save stock details in the database
  Stock.create(stock)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the stock details.",
      });
    });
};

// Retrieve all stocks from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  console.log(name);
  var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  Stock.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stock details.",
      });
    });
};

// Find a single stock with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stock.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving stock details with id=" + id,
      });
    });
};
