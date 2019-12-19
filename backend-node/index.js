const express = require("express");

const app = express();

app.get('/', (req, res) => {
  return res.send(`Bem vinde, ${req.query.name}! Esse eh meu primeiro projetinho em JS :D`);
})

app.get('/landing', (req, res) => {
  return res.send('Meu primeiro router em JS');
})

app.get("/nome/:name", (req, res) => {
  return res.json({
    welcome: `Bem-vinde, ${req.params.name}`
  })
})

app.listen(3000);