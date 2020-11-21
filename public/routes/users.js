const express = require('express');
const router = express.Router();

//login handle
router.get('/main',(req,res)=>{
    res.render('views/Main');
})

router.get('/signin', 
async (req,res) => {
  if (req.session.user) {
    res.redirect('/member');
  } else {
    res.render('pages/signin');
  }
})

router.get('/member',(req,res)=>{
    res.render('views/Member.ejs')
    })

router.get('/bootstrap',(req,res)=>{
    res.render('views/bootstrap.ejs')
    })
//Register handle
router.post('/main',(req,res)=>{
})

router.post('/signin',
async (req, res) => {
  // get user input
  const username = req.body.username;
  const password = req.body.password;

  //check username and password
  if (username === "admin" && password === "admin") {
    // create session for user
    req.session.user = "admin";

    //login success and redirect to member area
    res.redirect('/member');
  } else {
    //render the login page with error information
    res.render('pages/signin', {error: 'Wrong username or password'});
  }
  
})

router.post('/member',(req,res,next)=>{
  })

router.post('/bootstrap',(req,res,next)=>{
  })
//logout
router.get('/logout',(req,res)=>{
 })
module.exports  = router;