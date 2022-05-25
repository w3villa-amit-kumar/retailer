const { Router } = require("express");
const { transaction, list } = require("../controllers/rewardControllers");
const {
  monthlyReward,
  allcustomers,
} = require("../controllers/customerControllers");
// Init routes
const routes = Router();

// API end points

//Transaction save user transaction & calculate rewards.
routes.post("/reward/:userId", transaction);
//Last 3 months Transaction details.
routes.get("/list/:userId", list);
// Monthly reward & Total reward.
routes.get("/monthly/:userId", monthlyReward);
//
routes.get("/customer", allcustomers);

module.exports = routes;
