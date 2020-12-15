const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const expressHandle = require("express-handlebars");
app.engine("handlebars", expressHandle({ defaultLayout: "default" }));

const routes = require("./controller/burgers_controller.js");
app.use(routes);

app.listen(PORT, function () {
  console.log("server listening on: local host" + PORT);
});
