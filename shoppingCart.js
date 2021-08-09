const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./consolepos.db");
const queries = [];

function get(id, callback) {
  db.each(
    "SELECT * FROM Orders WHERE TransactionID = ?",
    [id],
    (err, row) => {
      if (err) {
        callback([]);
      } else {
        queries.push(row);
      }
    },
    () => {
      callback(queries);
    }
  );
}

function getTrxID(callback) {
  db.each(
    "SELECT TransactionID,OrderTime FROM Orders GROUP BY TransactionID",
    (err, row) => {
      if (err) {
        callback([]);
      } else {
        queries.push(row);
      }
    },
    () => {
      callback(queries);
    }
  );
}

function add(trxid, details, qty, price, ordertime) {
  db.run(
    `INSERT into Orders(TransactionID,Details,Qty,Price,OrderTime) VALUES (?,?,?,?,?)`,
    [trxid, details, qty, price, ordertime],
    (err) => {
      if (err) {
        console.log(`error writing to db ${err}`);
        Success = false;
      } else {
        Success = true;
      }
      return Success;
    }
  );
}

function del(id) {
  db.run(`DELETE FROM Orders WHERE TransactionID = (?)`, [id], (err) => {
    if (err) {
      console.log(`error deleting from db ${err}`);
      Success = false;
    } else {
      console.log(`Deleted [${id}]`);
      Success = true;
    }
    return Success;
  });
}

module.exports = { get, getTrxID, add, del };
