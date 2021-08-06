const { menuitems } = require("./offerings");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function MenuSelection() {
  
  for (i = 0; i < menuitems.length; i++) {
    console.log(`${i} - ${menuitems[i].name}`);
  }

  rl.question(`What would you like to order [${menuitems.length}]?`, (category) => {
      if (parseInt(category) < menuitems.length) {
          ItemSelection(category)
      } else {
          console.log('please enter only 0 -', menuitems.length-1);
          MenuSelection()
      }
  })
}

function ItemSelection(category) {
  
  for (j = 0; j < menuitems[parseInt(category)].items.length; j++) {
    console.log(`${j} - ${menuitems[parseInt(category)].items[j].name}`);
  }

  rl.question(`Which ${menuitems[category].name} would you like to order ?`, (item) => {
      if (parseInt(item) < menuitems[parseInt(category)].items.length) {
        OptionSelection(category,item)
      } else {
        ItemSelection(category)
      }
  })
}

function OptionSelection(category,item) {
  
  for (k = 0; k < menuitems[category].items[item].options.length; k++) {
    console.log(
      `${k} - ${menuitems[category].items[item].options[k].name}`
    );
  }

  rl.question('What is your selection>', (answer) => {
      if (parseInt(answer) < menuitems[category].items[item].options.length) {
          console.log('You typed: ', answer)
          //send it to the ShoppingCart
          rl.close()
      } else {
        OptionSelection(category,item)
      }
  })
}

MenuSelection()


rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
