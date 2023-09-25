const express = require("express")
const app = express();
const cors = require('cors');
const allBooks = require('./data/allBooks')
const allYarn = require('./data/allYarn')
const allCraftTools = require('./data/allCraftTools')

app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(cors());

app.locals.title = "The Knit Nest"
app.locals.yarn = allYarn
app.locals.books = allBooks
app.locals.tools = allCraftTools

app.get("/api/v1/books", async (request, response) => {
  response.status(200).json({books: app.locals.books});
}) 

app.get("/api/v1/tools", async (request, response) => {
  response.status(200).json({tools: app.locals.tools});
}) 

app.get("/api/v1/yarn", async (request, response) => {
  response.status(200).json({yarn: app.locals.yarn});
}) 

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});