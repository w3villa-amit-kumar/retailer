const Customer = require("../models/customer");
const moment = require("moment");
const { responses } = require("../core/list");

module.exports = {
  // Get all customers.
  allcustomers: async (req, res) => {
    //Query
    const list = await Customer.find({ role: "customer" });

    let result = list.map((list) => {
      let data = {
        id: list.id,
        "customer email": list.email,
        "Total reward": list.reward,
      };
      return data;
    });

    let resp = responses(true, result);
    //Response
    res.send(resp);
  },

  // monthly reward & Total reward.
  monthlyReward: async (req, res) => {
    const { userId } = req.params;

    const [list] = await Customer.find({ _id: userId });
    //Validate the user

    if (!list) {
      let resp = responses(false, { msg: "No data found" });
      return res.send(resp);
    }
    //Create a HashMap
    let monthCount = new Map();

    for (let i = 0; i < list.transaction.length; i++) {
      let data = list.transaction[i];

      let monthsString = moment(data.date).format("MMMM");

      let monthlyReward = monthCount.get(monthsString);
      if (monthlyReward) {
        monthCount.set(monthsString, data.reward + monthlyReward);
      } else {
        monthCount.set(monthsString, data.reward);
      }
    }

    let obj = Object.fromEntries(monthCount);
    let data = {
      "Total Reward": list.totalReward,
      "Monthly Reward": obj,
    };

    let resp = responses(true, data);
    // Response
    res.send(resp);
  },
};
