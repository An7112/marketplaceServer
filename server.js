const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const route = require('./routes/route')
const POST = 9000

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/api', route)

mongoose.connect('mongodb+srv://thanhan7112:0201172001An@cluster0.kvelfsq.mongodb.net/?retryWrites=true&w=majority').catch(error => console.log(error));
const database = mongoose.connection
if(!database) {
    console.log("Error connecting MongoDB")
}else{
    console.log("MongoDB connected successfully!")
}

app.get('/', function(req, res) {
    res.send("We are on home")
})

app.listen(POST, function() {
    console.log(`The server is running on ${POST}`)
})