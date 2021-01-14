const { Router } = require("express");
const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    let hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, false],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burger/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne({ devoured: true }),
    condition,
    function (result) {
      if (result.changedRows == 0) {
        return res.status(200).end();
      }
    };
});
module.exports = router;
