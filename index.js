const express = require("express")
const app = express();
const cors = require('cors');
// const knex = require("./knex");
const allProducts = require('./data/allProducts')
const products = require('./data/products')

app.set('port', process.env.PORT || 3001);
app.use(express.json());
app.use(cors());

app.locals.title = "The Knit Nest"
app.locals.allproducts = allProducts
app.locals.products = products
app.locals.users = [
  {
    userID: 1,
    name: "Hollis Vohr",
    email: "hollis.vohr@gmail.com",
    password: "sadie",
    cart: []
  }
];

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

app.get("/api/v1/users", async (request, response) => {
  return response.status(200).json({ users: app.locals.users });
})

app.post('/api/v1/users', (request, response) => {
  app.locals.users.push(request.body)
  response.status(201).json(app.locals.users);
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});