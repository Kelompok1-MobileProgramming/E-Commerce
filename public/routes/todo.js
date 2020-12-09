const express = require('express');
const router = express.Router();

router.get('/',
   async (req, res) => {
       if (!req.session.user) {
           res.redirect('../users/register');
       } else {
           res.render('../users/register', {
               tasks: await TodoController.find()
           });
       }
   }
);

router.post('/add',
   async (req, res) => {
       // add the new task
       const newTask = req.body.taskName;
       req.session.tasks.push(newTask);

       res.redirect('../users/register');
   }
);

router.post('../users/register',
   async (req, res) => {
       // get the index of the task to be deleted
       const index = req.params.index;

       // only delete if there's that task
       await TodoController.remove(index)

       res.redirect('/todo');
   }
);

module.exports = router;