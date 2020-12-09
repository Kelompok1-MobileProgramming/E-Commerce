const express = require('express');
const router  = express.Router();

router.get('/',
    async (req, res) => {
        res.send('<a href="users/main"> klik disini untuk masuk link kamu </a>');
    });

module.exports = router; 