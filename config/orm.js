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
