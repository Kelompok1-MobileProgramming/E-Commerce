const express = require ('express');
const router = express.Router();
const { check, validationResult, checkSchema} = require('express-validator');
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const User = require('../../models/users');
const auth = require('../../middleware/auth');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
//const AuthController    = require('../../controllers/AuthControllers')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);



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
        if(username === "admin" && password === "admin") {
            //session
            req.session.user = "admin";

            //login success and redirect to member area
            res.redirect('/users/member');
        } else {
            res.render('../views/signin', { layout: false, error: 'Wrong username or password.'});
        }
    });

/*outer.post('/signin', 
[
    check("username", "Please enter a valid username").isString(),
    check("password", "Please enter a valid password").isLength({
        min: 8
    }) 
],
    async(req,res) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {email, password} = req.body;
        try{
            let user = await User.findOne({
                email
            });
            if(!user){
                res.render('/views/signin', {error: 'User Not Exist'});
            } else {
                    const isMatch = await bcrypt.compare(password, user.password);
                        if(!isMatch){
                            res.render('/views/signin', {error: 'Incorrect Password!'});
                        } else {
                            const payload = {
                                user: {
                                id: user.id
                                }
                            };
        
                            jwt.sign(
                                payload,
                                "randomString",
                                {
                                    expiresIn: 3600
                                },
                                (err, token) => {
                                    if(err) {
                                        throw err;
                                    } else {
                                        console.log({token});
                                        req.session.user = "client";
                                        res.redirect('/');
                                    }
                                    
                                }
                            );
                        }
                }    
        } catch (e) {
            console.error(e);
            res.status(500).json({
                message: "Server Error"
            });
        }    
    }
);*/

router.get('/register', 
  async (req,res) => {
    //if (req.session.user){
        //res.redirect('/users/main');
    //} else {
        res.render('../views/signinform');
    //}
  }
);

router.post('/register',
    [
        check("username", "Please enter a valid name")
        .not()
        .isEmpty(),
        check("password", "Please enter a valid password").isLength({
            min: 8
        }),
        check("repeatpassword", "enter the password again").isLength({
          min: 8
        })
    ],
    async(req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }

        const {
            username,
            password, 
            repeatpassword
        } = req.body;
        try{
            let user = await User.findOne({
                username
            });
            if (user) {
                res.render('/views/signinform', {error: 'User Already Exists'});
            } else{
                user = new User({
                    username,
                    password,
                    repeatpassword
                });
    
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);
                user.repeatpassword = await bcrypt.hash(repeatpassword, salt);

                await user.save();
    
                const payload = {
                    user: {
                        id: user.id
                    }
                };
    
                jwt.sign(
                    payload,
                    "randomString", {
                        expiresIn: 10000
                    },
                    (err, token) => {
                        if (err) {
                            throw err;
                        } else {
                            console.log({token});
                            req.session.user = "client";
                            res.redirect('/users/member');
                        }
                        
                    }
                );
            }
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
    }
);

//router.post('/login', AuthController.login)

router.post('/member',(req,res,next)=>{
  })

router.post('/bootstrap',(req,res,next)=>{
  })

  router.get('/me', auth, async (req,res) => {
    try{
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (e) {
        res.send({message: "Error in Fetching user"});
    }
});

//logout
router.get('/logout',
    async(req,res) => {
        req.session.destroy();

        //redirect to login
        res.redirect('/views/Main');
    }
);
module.exports  = router;

router.get('/desc',(req,res) => {
  res.render('Description');
})