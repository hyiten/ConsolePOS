const shoppingCart = require("./shoppingCart.js");
const currentTime = require("./timestampFnc.js");

shoppingCart.getTrxID((data) => {
  data.forEach(element => {
    console.log(element.TransactionID, currentTime.convert(element.OrderTime));
  });
});
