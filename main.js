const { menuitems } = require("./offerings");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

for (i = 0; i < menuitems.length; i++) {
  console.log(`${i} - ${menuitems[i].name}`);
}

rl.question("What would you like to order ? ", function (category) {
  for (j = 0; j < menuitems[parseInt(category)].items.length; j++) {
    console.log(`${j} - ${menuitems[parseInt(category)].items[j].name}`);
  }
  rl.question(
    `Which ${menuitems[category].name} would you like to order ? `,
    function (item) {
      for (k = 0; k < menuitems[category].items[item].options.length; k++) {
        console.log(
          `${k} - ${menuitems[category].items[item].options[k].name}`
        );
      }
      rl.question(
        `How would you like your ${menuitems[category].items[item].name} ? `,
        function (preference) {
          try {
            for (
              l = 0;
              l < menuitems[category].items[item].options2.length;
              l++
            ) {
              console.log(
                `${l} - ${menuitems[category].items[item].options2[l].name}`
              );
            }
            rl.question(
              `Your order for "${menuitems[category].items[item].options[preference].name} ${menuitems[category].items[item].name}" ? `,
              function (item2) {
                console.log(`"${menuitems[category].items[item].options2[item2].name} ${menuitems[category].items[item].options[preference].name} ${menuitems[category].items[item].name}"`)                  
                rl.close();
              }
            );
          } catch (err) {
            // no-addons
            console.log(`"${menuitems[category].items[item].options[preference].name} ${menuitems[category].items[item].name}"`)
            rl.close();
          }
        }
      );
    }
  );
});

rl.on("close", function () {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});
