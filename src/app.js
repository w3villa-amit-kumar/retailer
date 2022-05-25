// Import required packages
const express = require("express");
require("dotenv").config();
const db = require("./models"); // init mongodb.
const helmet = require("helmet");
const rewardRouter = require("./routes/rewardRoutes");

// Init express
const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());

// Routed
app.use(rewardRouter);

// Export the app method.
module.exports = app;
