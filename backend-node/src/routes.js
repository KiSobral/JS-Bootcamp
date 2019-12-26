const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.send('Rotas são legais')
})

module.exports = routes
