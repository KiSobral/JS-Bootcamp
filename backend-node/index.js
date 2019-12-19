const express = require("express");

const app = express();

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  req.appName = 'Super Programa JS'

  return next();
}

app.use(logMiddleware);

app.get('/', (req, res) => {
  return res.send(`Bem vinde ao ${req.appName}, ${req.query.name}!`);
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