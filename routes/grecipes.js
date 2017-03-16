const express = require('express')
const router = express.Router()
var knex = require('../db/knex')

function User() {
 return knex('user')
}

function Recipe() {
 return knex('recipe')
}

function Ingredient() {
 return knex('ingredient')
}

function Step() {
 return knex('step')
}

function Review() {
 return knex('review')
}

function Join() {
 return knex('ingredient_recipe')
}
// CREATE


// if user already exists return id // insert
// elece create user and return id // update
router.post('/users', function (req, res) {
 var userID;
 knex('user').where('name', req.body.name).select('id')
  // look here,
  .then(result => {
   // not found, run catch
   userID = result[0].id
   console.log(userID);
   return [userID];
  })
  // trying to post twice when posting a new user
  //
  .catch(result => {
   console.log(`UserID not found, new userID is ${userID}`)
   //create new user
   return User().insert({
    name: req.body.name,
    avatar: req.body.avatar
   }, 'id')
  })
  .then(function (result) {
   res.json(result)
  })
})
router.post('/recipes', function (req, res) {
 var recipeID;
 knex('recipe').where('name', req.body.name).select('id')
  .then(result => {
   recipeID = result[0].id
   console.log(recipeID + 'This guy alreay exits');
   return [recipeID]
  })
  .catch(result => {
   console.log(`recipeID not found, new recipeID is ${recipeID}`) // when creating a user the id returns undefined
   return Recipe().insert({
    description: req.body.description,
    image: req.body.image,
    name: req.body.name,
    user_id: req.body.user_id
   }, 'id')
  })
  .then(function (result) {
   res.json(result)
  })
})

router.post('/ingredients', function (req, res) {
 var ingID;
 knex('ingredient').where('name', req.body.name).select('id')
  // look here,
  .then(result => {
   // not found, run catch
   ingID = result[0].id
   console.log(ingID);
   return [ingID];
  })
  .catch(result => {
   console.log(`ingID not found, new ingID is ${ingID}`)
   //create new user
   return Ingredient().insert({
    name: req.body.name,
    recipe_id: req.body.recipe_id
   }, 'id')
  })
  .then(function (result) {
   res.json(result)
  })
})


router.post('/steps', function (req, res) {
 var stepID;
 knex('step').where('step', req.body.step).select('id')
  .then(result => {
   stepID = result[0].id
   console.log(stepID);
   return [stepID]
  })
  .catch(result => {
   return Step().insert({
    recipe_id: req.body.recipe_id,
    step: req.body.step,
    order: req.body.order
   }, 'id')
  })
  .then(function (result) {
   res.json(result)
  })
})

router.post('/reviews', function (req, res) {
 var revID;
 knex('review').where('review', req.body.body).select('id')
  .then(result => {
   revID = result[0].id
   console.log(revID);
   return [revID]
  })
  .catch(result => {
   return Review().insert({
    user_id: req.body.user_id,
    recipe_id: req.body.recipe_id,
    rating: req.body.rating,
    body: req.body.body
   }, 'id')
  })
  .then(function (result) {
   res.json(result)
  })
})

router.post('/joins', function (req, res) {
 Join().insert({
   recipe_id: req.body.recipe_id,
   ingredient_id: req.body.ingredient_id
  })
  .then(function (result) {
   res.json(result)
  })
})

// READ
router.get('/users', function (req, res) {
 User().select().then(function (result) {
  res.json(result)
 })
})

router.get('/users/:id', function (req, res) {
 User().select().where('id', req.params.id).then(function (result) {
  res.json(result)
 })
})

router.get('/recipes', function (req, res) {
 Recipe().select().then(function (result) {
  res.json(result)
 })
})

router.get('/recipes/:id', function (req, res) {
 Recipe().select().where('id', req.params.id).then(function (result) {
  res.json(result)
 })
})
router.get('/ingredients', function (req, res) {
 Ingredient().select().then(function (result) {
  res.json(result)
 })
})

router.get('/ingredients/:id', function (req, res) {
 Ingredient().select().where('id', req.params.id).then(function (result) {
  res.json(result)
 })
})

router.get('/steps', function (req, res) {
 Step().select().then(function (result) {
  res.json(result)
 })
})

router.get('/steps/:id', function (req, res) {
 Step().select().where('id', req.params.id).then(function (result) {
  res.json(result)
 })
})
router.get('/reviews', function (req, res) {
 Review().select().then(function (result) {
  res.json(result)
 })
})

router.get('/reviews/:id', function (req, res) {
 Review().select().where('id', req.params.id).then(function (result) {
  res.json(result)
 })
})

router.get('/joins', function (req, res) {
  Join().select().then(function (result) {
    res.json(result)
  })
})

// UPDATE
router.put('/users/:id', (req, res) => {
 User().where('id', req.params.id).update({
   name: req.body.name,
   avatar: req.body.avatar
  }, ['id', 'name', 'avatar'])
  .then(result => {
   res.json(result)
  })
})

router.put('/recipes/:id', (req, res) => {
 Recipe().update({
   description: req.body.description,
   image: req.body.image,
   name: req.body.name,
   user_id: req.body.user_id
  })
  .where('id', req.params.id)
  .then(result => {
   res.json(result)
  })
})

router.put('/ingredients/:id', (req, res) => {
 // recipe_id name
 Ingredient().update({
   recipe_id: req.body.recipe_id,
   name: req.body.name
  })
  .where('id', req.params.id)
  .then(result => {
   res.json(result)
  })
})

router.put('/steps/:id', (req, res) => {
 Step().update({
   recipe_id: req.body.recipe_id,
   step: req.body.step,
   order: req.body.order
  })
  .where('id', req.params.id)
  .then(result => {
   res.json(result)
  })
})

router.put('/reviews/:id', (req, res) => {
 Review().update({
   user_id: req.body.user_id,
   recipe_id: req.body.recipe_id,
   rating: req.body.rating,
   body: req.body.body
  })
  .where('id', req.params.id)
  .then(result => {
   res.json(result)
  })
})

// DELETE
router.delete('/users/:id', function (req, res) {
 User().where('id', req.params.id).del().then(function (result) {
  res.json(result)
 })
})

router.delete('/recipes/:id', function (req, res) {
 Recipe().where('id', req.params.id).del().then(function (result) {
  res.json(result)
 })
})

router.delete('/ingredients/:id', function (req, res) {
 Ingredient().where('id', req.params.id).del().then(function (result) {
  res.json(result)
 })
})

router.delete('/steps/:id', function (req, res) {
 Step().where('id', req.params.id).del().then(function (result) {
  res.json(result)
 })
})

router.delete('/reviews/:id', function (req, res) {
 Review().where('id', req.params.id).del().then(function (result) {
  res.json(result)
 })
})


module.exports = router;
