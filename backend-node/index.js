const express  = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  watch: true,
});

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "njk");

app.get("/", (req, res) => {
  return res.render("formulario");
})

app.post("/check", (req, res) => {
  
  if (req.body.age < 18) {
    return res.redirect(`/minor?age=${req.body.age}`);
  } else {
    return res.redirect(`/major?age=${req.body.age}`);
  }
});

app.get("/major", (req, res) => {
  const age = req.query;

  return res.render('major', age);
})

app.get("/minor", (req, res) => {
  const age = req.query;

  return res.render('minor', age);
})

app.listen(3000);