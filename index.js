const express = require("express")
const app = express();
const cors = require('cors');
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
    userID: "1",
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

app.post('/api/v1/userCart', (req, res) => {
  const { userID, id } = req.body;

  for (let requiredParameter of ['id', 'userID']) {
    if (req.body[requiredParameter] === undefined) {
      return res.status(422).json({
        message: `You are missing a required parameter of ${requiredParameter}`
      });
    }
  }
  const foundUser = app.locals.users.find(user => user.userID === userID);
  if (!foundUser) {
    return res.status(422).json({
      message: `No user found with ID ${userID}`
    });
  }
  if (foundUser.cart.includes(id)) {
    return res.status(422).json({
      message: `Product #${id} is already a product in user #${userID}'s cart`
    });
  }
  foundUser.cart.push(id);
  return res.status(201).json({
    message: `Item #${id} was added for User #${userID}`
  });
});

app.delete('/api/v1/userCart', (req, res) => {
  const { userID, id } = req.body;
  const foundUser = app.locals.users.find(user => user.userID === userID);
  foundUser.cart = foundUser.cart.filter(product => {
    return product !== id
  })
  
  res.status(201).json(foundUser)
});

app.post('/api/v1/users', (request, response) => {
  app.locals.users.push(request.body)
  response.status(201).json(app.locals.users);
})

app.get("/api/v1/users", async (request, response) => {
  return response.status(200).json({ users: app.locals.users });
})

app.get("/api/v1/products", async (request, response) => {
  response.status(200).json({ products: app.locals.products });
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});