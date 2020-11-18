const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const layouts = require('express-ejs-layouts');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
app.use(express.static('public'));

//enable session
app.use(session({
    secret: 'som3_s3cret_key5',
    cookie: {}
}))

//router
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');

app.use('/', indexRouter);
app.use('/auth', authRouter);

app.listen(3000);
console.log('Server runs at port 3000...');

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});