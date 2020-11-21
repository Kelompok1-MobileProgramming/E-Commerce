const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const expressEjsLayout = require('express-ejs-layouts')
//mongoose
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology : true})
.then(() => console.log('connected,,'))
.catch((err)=> console.log(err));
//EJS
app.set('view engine','ejs');
app.use(expressEjsLayout);
//BodyParser
app.use(express.urlencoded({extended : false}));
app.use('/public', express.static('public'));

//Routes
app.use('/',require('./public/routes/index'));
app.use('/users',require('./public/routes/users'));

app.listen(3000); 
console.log(`the server has been started on port ${port}`)