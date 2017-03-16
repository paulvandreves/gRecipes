const grecipes = require('./routes/grecipes.js')
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const PORT = process.envPORT || 8080
// var cors = require("cors");


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
 extened: true
}))
app.use(express.static("public"))

app.use('/grecipes', grecipes)
// app.use('/recipe' , gRecipes)
// app.use('/ingredient', gRecipes)
// app.use('/step', gRecipes)
// app.use('/review', gRecipes)

app.listen(PORT, () => {
 console.log(`Listening on port ${PORT}`);
})

// anything  that is required must be in pacakage.json
