const express = require('express');
const session = require ('express-session');
const BodyParser = require ('body-parser');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const expressEjsLayout = require('express-ejs-layouts')

app.use(BodyParser.urlencoded({ extended: true }));

//enable session
app.use(session ({
    secret: 'som3_s3cret_key5',
    cookie: {},
    resave: true,
    saveUninitialized: true
}));

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    fullname: String
});

const User = mongoose.model('user', userSchema);
//mongoose
mongoose.connect(
    'mongodb+srv://Andri:LIhQIAnRoasaoQot@cluster0.mk3xs.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Database Connected')
})

//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));
app.use('/public', express.static('public'));

//Routes
app.use('/',require('./public/routes/index'));
app.use('/users',require('./public/routes/users'));

app.listen(`${PORT}`); 
console.log(`the server has been started on port ${PORT}`)