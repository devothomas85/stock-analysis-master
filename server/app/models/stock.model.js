module.exports = (sequelize, Sequelize) => {
  const Stock = sequelize.define("stock", {
    name: {
      type: Sequelize.STRING,
    },
    curr_market_price: {
      type: Sequelize.FLOAT,
    },
    market_cap: {
      type: Sequelize.FLOAT,
    },
    stock_pe: {
      type: Sequelize.FLOAT,
    },
    divident_yield: {
      type: Sequelize.FLOAT,
    },
    roce: {
      type: Sequelize.FLOAT,
    },
    roe_pre_annum: {
      type: Sequelize.FLOAT,
    },
    debt_to_equity: {
      type: Sequelize.FLOAT,
    },
    eps: {
      type: Sequelize.FLOAT,
    },
    reserves: {
      type: Sequelize.FLOAT,
    },
    debt: {
      type: Sequelize.FLOAT,
    },
  });

  return Stock;
};
