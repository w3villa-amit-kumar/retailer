const { Router } = require("express");
const {
  transaction,
  list,
  monthlyReward,
} = require("../controllers/rewardControllers");

// Init routes
const routes = Router();

// API end points

//Transaction save user transaction & calculate rewards.
routes.post("/reward/:userId", transaction);
//Last 3 months Transaction details.
routes.get("/list/:userId", list);
// Monthly reward & Total reward.
routes.get("/monthly/:userId", monthlyReward);

module.exports = routes;
