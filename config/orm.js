const { query } = require("../config/connection.js");
const connection = require("../config/connection.js");

function printQuestions(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (let key in ob) {
    var value = ob[key];
    if (typeof value === "string" && value.indexOf(" ") >= 0) {
      value = "'" + value + "'";
    }
  }
  return arr.toString();
}

const orm = {
  selectAll: (tableInput, cb) => {
    let queryString = "SELECT * FROM" + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: (table, cols, vals, cb) => {
    let queryString = "INSERT INTO" + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += " )";
    queryString += " VALUES (";
    queryString += printQuestions(vals.length);
    queryString += " )";
    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: (table, objColVals, condition, cb) => {
    let queryString = "UPDATE" + tables;

    queryString += "SET";
    queryString += objToSql(objToSql);
    queryString += " WHERE";
    queryString += condition;
    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
