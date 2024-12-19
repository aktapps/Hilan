const express = require('express');
const router = express.Router();
const {createUser} = require('./../../db/db');

router.post('/', (req,res,next) =>{
    let stat = "";
    const queryStats = [];
    for(let i = 0; i < req.body.Users.length; i++) {
        queryStats.push(
            new Promise(
                (resolve,reject) => { 
                createUser(req.body.Users[i].UserId, req.body.Users[i].FirstName, req.body.Users[i].LastName, req.body.Users[i].Email, 
                (err, data) => {
                if(err)
                {
                    stat += "ERROR: " + err + "\n";
                    reject();
                }
                else
                {
                    stat += "Added: " + data.id + "\n";
                    resolve();
                }
                })
            })
        )
    }
   

    Promise.all(queryStats)
      .then(() => {
        res.status(200).send("All users inserted successfully");
      })
      .catch((err) => {
        res.status(500).send(stat);
      });
});

module.exports = router;