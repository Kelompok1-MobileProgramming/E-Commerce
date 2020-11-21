const express = require('express');
const router  = express.Router();
//main page
router.get('/', (req,res)=>{
    res.render('Main');
})
//login page
router.get('/signin', (req,res)=>{
    res.render('signin');
})

//register page
router.get('/register', (req,res)=>{
    res.render('signinform');
})

//member page
router.get('/member', (req,res)=>{
    res.render('Member');
})

//performance page
router.get('/bootstrap', (req,res)=>{
    res.render('bootstrap');
})

module.exports = router; 