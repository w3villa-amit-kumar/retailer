const rewardCore = require("../core/reward");
const { List, responses } = require("../core/list");
const Customer = require("../models/customer");
const moment = require("moment");
const { transaction } = require("../helper/validation");

module.exports = {
  //Transaction. calculate rewards & save the Transaction details
  transaction: async (req, res) => {
    // userID params
    const { userId } = req.params;
    // Validate the input
    const { email, amount } = await transaction.validateAsync(req.body);

    try {
      // Reward.  calculate the  rewards
      const reward = rewardCore(amount);
      //Find user with the help of userId
      const notFound = await Customer.find({ _id: userId });

      // Perform operation

      if (notFound.length === 0) {
        //create one
        let doc = await new Customer({
          _id: userId,
          email: email,
          transaction: [
            {
              amount: amount,
              reward: reward,
              date: moment().format("YYYY-MM-DD"),
            },
          ],
          totalReward: reward,
        });

        let result = await doc.save();

        let data = {
          reward: result.transaction[0].reward,
          "Total Reward": result.totalReward,
        };

        let resp = responses(true, data);

        //send response
        return res.send(resp);
      } else {
        let totReward = notFound[0].totalReward + reward;

        let data = await Customer.findOneAndUpdate(
          { _id: userId },
          {
            totalReward: totReward,
            $push: {
              transaction: {
                amount: amount,
                reward: reward,
                date: moment().format("YYYY-MM-DD"),
              },
            },
          }
        );

        data = {
          reward: reward,
          "Total Reward": totReward,
        };
        let resp = responses(true, data);

        // send response
        res.send(resp);
      }
    } catch (error) {
      console.log(error);
    }
  },

  // Transaction list during 3 month period.
  list: async (req, res) => {
    try {
      const { userId } = req.params;
      const [list] = await Customer.find({ _id: userId });
      // validate user
      if (!list) {
        let resp = responses(false, { msg: "No data found" });
        return res.send(resp);
      }
      //Return the during 3 month period details of user.
      const result = List(list);

      let resp = responses(true, result);

      res.send(resp);
    } catch (error) {
      console.error(error);
    }
  },
};
