const express = require('express');
const router = express.Router();
const {getUsers} = require('./../../db/db');

router.get('/', (req,res,next) =>{
        getUsers((err,rows) => {
            if(err)
                res.status(500).send(err.message);
            else
                res.status(200).json(rows);
        })
});


module.exports = router;