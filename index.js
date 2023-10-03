const express = require("express")
const app = express();
const cors = require('cors');
// const knex = require("./knex");
const allProducts = require('./data/allProducts')
const products = require('./data/products')
// const allBooks = require('./data/allBooks')
// const allYarn = require('./data/allYarn')
// const allCraftTools = require('./data/allCraftTools')

app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(cors());

app.locals.title = "The Knit Nest"
app.locals.allproducts = allProducts
app.locals.products = products


// app.get("/api/v1/:category", async (request, response) => {
//   const category = request.params.category
//   console.log(category)
//   const inputCategory = await knex.from("allProducts").select("category").where({ category: category })
//   if (inputCategory.length) {
//     const foundProducts = await knex.from("allProducts").select().where({ category: category })
//     response.status(200).json(foundProducts);
//   } else {
//     res.sendStatus(404);
//   }
// });

app.get("/api/v1/products/:category", async (request, response) => {
  let category = request.params.category
  const foundProducts = app.locals.allproducts[category]
  if (foundProducts.length) {
    response.status(200).json(foundProducts)
  } else {
    response.sendStatus(404)
  }
});


app.get("/api/v1/products", async (request, response) => {
  response.status(200).json({ products: app.locals.products });
})

// app.get("/api/v1/yarn", async (request, response) => {
//   response.status(200).json({ yarn: app.locals.yarn });
// })

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});