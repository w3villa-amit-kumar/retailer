const reward = function (amount) {
  // Check the amount spend is more than 50

  if (amount <= 50) {
    return 0;
  }

  // Initiate variables
  let rewardPoint50 = 0,
    rewardPoint100 = 0;

  // Calculate the points if spent is more than 50
  if (amount > 50) {
    rewardPoint50 = amount - 50;
  }

  // Calculate the points if spent is more than 100
  if (amount > 100) {
    rewardPoint100 = amount - 100;
  }

  // Calculate the total points
  let result = rewardPoint50 + rewardPoint100;

  return result;
};

module.exports = reward;
