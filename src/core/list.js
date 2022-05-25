const moment = require("moment");

const List = function (list) {
  let n = list.transaction.length;

  //Base condition.
  if (n === 0) {
    return 0;
  }

  //temp array
  let temp = [];

  //loop
  for (let i = 0; i < list.transaction.length; i++) {
    let monthback = moment().subtract(3, "months").format("YYYY-MM-DD");
    let now = moment().format("YYYY-MM-DD");

    let data = list.transaction[i].date;

    let btw = moment(data).isBetween(monthback, now);

    if (btw) {
      temp.push(list.transaction[i]);
    }

    if (data === now) {
      temp.push(list.transaction[i]);
    }
  }

  return temp;
};

function responses(success, data) {
  return {
    success: success,
    data: data, // object or any
  };
}

module.exports = { List, responses };
