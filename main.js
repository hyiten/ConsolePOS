const { menuitems } = require("./offerings");
const currentTime = require("./timestampFnc.js");
const shoppingCart = require("./shoppingCart.js");
const readline = require("readline");
const uuid = require("uuid");

trxid = uuid.v4();

var orderPrice = 0;
var currentOrder = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function MenuSelection() {
  for (i = 0; i < menuitems.length; i++) {
    console.log(`${i} - ${menuitems[i].name}`);
  }

  rl.question(
    `What would you like to order [${menuitems.length}]?`,
    (category) => {
      if (parseInt(category) < menuitems.length) {
        ItemSelection(category);
      } else {
        console.log("please enter only 0 -", menuitems.length - 1);
        MenuSelection();
      }
    }
  );
}

function ItemSelection(category) {
  for (j = 0; j < menuitems[parseInt(category)].items.length; j++) {
    console.log(
      `${j} - ${menuitems[parseInt(category)].items[j].name} / ${
        menuitems[parseInt(category)].items[j].price
      }`
    );
  }

  rl.question(
    `Which ${menuitems[category].name} would you like to order ?`,
    (item) => {
      if (parseInt(item) < menuitems[parseInt(category)].items.length) {
        orderPrice = menuitems[parseInt(category)].items[parseInt(item)].price;
        OptionSelection(category, item);
      } else {
        ItemSelection(category);
      }
    }
  );
}

function OptionSelection(category, item) {
  for (k = 0; k < menuitems[category].items[item].options.length; k++) {
    console.log(
      `${k} - ${menuitems[category].items[item].options[k].name} / ${menuitems[category].items[item].options[k].addprice}`
    );
  }

  rl.question("What is your selection>", (answer) => {
    if (parseInt(answer) < menuitems[category].items[item].options.length) {
      orderPrice =
        orderPrice +
        menuitems[category].items[item].options[parseInt(answer)].addprice;
      console.log(
        "You have ordered ",
        menuitems[parseInt(category)].items[parseInt(item)].name,
        "/",
        menuitems[category].items[item].options[parseInt(answer)].name,
        "/ cost ",
        orderPrice
      );
      //ask the user if the order is all they want or they want to add items into the order
      currentOrder.push(
        `${menuitems[parseInt(category)].name},${
          menuitems[parseInt(category)].items[parseInt(item)].name
        },${
          menuitems[category].items[item].options[parseInt(answer)].name
        },${orderPrice}`
      );

      details = `${menuitems[parseInt(category)].name}/${
        menuitems[parseInt(category)].items[parseInt(item)].name
      }/${menuitems[category].items[item].options[parseInt(answer)].name}`;
      price = orderPrice;

      //write order into sqlite database
      shoppingCart.add(trxid, details, 1, price, currentTime.get());

      rl.question("Is that all (Y/N)?", (answer) => {
        if (answer == "y") {
          console.log('')
          console.log('Your orders are')
          console.log('----------------')
          grandTotal = 0
          for (allOrders = 0; allOrders < currentOrder.length; allOrders++) {
            orderDetails = currentOrder[allOrders].split(",");
            grandTotal += parseFloat(orderDetails[3])
            console.log(`${allOrders +1} - ${orderDetails[0]}/${orderDetails[1]}/${orderDetails[2]} .......... x1 ($${orderDetails[3]})`);
          }
          console.log('----------------')
          console.log(`GRAND Total : $${grandTotal}`)
         
          rl.close();
        } else {
          console.log("Ok, let me add some more to your order");
          MenuSelection();
        }
      });
    } else {
      OptionSelection(category, item);
    }
  });
}

MenuSelection();

rl.on("close", function () {
  //show receipt
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
