const express = require("express")
const app = express()
const allBooks = require('./data/allBooks')
const allYarn = require('./data/allYarn')
const allCraftTools = require('./data/allCraftTools')

app.set('port', process.env.PORT || 3001);

app.get("/", (request, response) => {
  response.send("hi");
})