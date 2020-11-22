const express = require('express');
const router = express.Router();

//login handle
router.get('/main',
  async(req,res)=>{
    res.render('../views/Main');
})

router.get('/signin', 
async (req,res) => {
  res.render('../views/signin');
})

router.get('/member',
async (req,res)=>{
    res.render('../views/Member');
    })

router.get('/bootstrap',(req,res)=>{
    res.render('../views/bootstrap');
    })
//Register handle
router.post('/main',(req,res)=>{
})

router.post('/signin',
async (req, res) => {
  // get user input
  const username = req.body.name;
  const password = req.body.password;

  //check username and password
  if (username === "admin" && password === "admin") {
  
    //login success and redirect to member area
    res.redirect('../users/member');
  } else {
    //render the login page with error information
    res.render('../views/signin', {error: 'Wrong username or password'});
  }
})

router.get('/register', (req,res)=>{
  res.render('signinform');
})

router.post('/member',(req,res,next)=>{
  })

router.post('/bootstrap',(req,res,next)=>{
  })
//logout
router.get('/logout',(req,res)=>{
 })
module.exports  = router;

router.get('/desc',(req,res) => {
  res.render('Description');
})