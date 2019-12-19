const express  = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true,
});

app.set("view engine", "njk");

app.get('/:name', (req, res) => {
  return res.render("list", {
    name: req.params.name,
  });
})

app.listen(3000);