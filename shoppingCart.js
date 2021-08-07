const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("consolepos.db");

function get(id) {
    db.run(
        `SELECT * from Orders WHERE ID = (?)`,
        [id],
        function (err) {
            if (err) {
                console.log(`error reading from db ${err}`);
                OrderID = {}
            } else {
                console.log(`found [${this.ID}`);
                OrderID = {id: this.ID, trxid: this.TransactionID, details: this.Details, qty: this.Qty, price: this.Price, ordertime: this.OrderTime}
            }
            return OrderID
        }
      );    
}

function add(trxid, details, qty, price, ordertime) {
  db.run(
    `INSERT into Orders(TransactionID,Details,Qty,Price,OrderTime) VALUES (?,?,?,?,?)`,
    [trxid, details, qty, price, ordertime],
    function (err) {
        if (err) {
            console.log(`error writing to db ${err}`);
            Success = false
        } else {
            Success = true;
        }
        return Success
    }
  );
}

function del(id) {
    db.run(
        `DELETE FROM Orders WHERE ID = (?)`,
        [id],
        function (err) {
            if (err) {
                console.log(`error deleting from db ${err}`);
                Success = false
            } else {
                console.log(`Deleted [${id}`);
                Success = true
            }
            return Success
        }
      );
}

module.exports = { get, add, del };
