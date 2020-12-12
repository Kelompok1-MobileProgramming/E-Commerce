const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

//enable cross origin resource sharing
app.use(cors())

//transforms the raw string of req.body into JSON
app.use(bodyParser.json())

//connent to database
mongoose.connect(
    'mongodb+srv://Andri:LIhQIAnRoasaoQot@cluster0.mk3xs.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
)

//check database connection
const db = mongoose.connection
db.once('open', () => {
    console.log('Connected to MongoDB')
})

//define URL routes
const users = require('./api/routes/users')
app.use('/users', users)

//error handling
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        errors: {
            message: err.message
        }
    })
})

//listen to port
app.listen(9999)
console.log('Server runs at port 9999.')