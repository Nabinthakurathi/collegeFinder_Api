const express = require('express');
const router =express.Router();
const College = require('../models/college')
const auth = require('../auth');

router.post('/create',(req,res,next)=>{
    College.create({
        CollegeName:req.body.CollegeName,
        Location:req.body.Location,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"College created successfully",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
   College.find({})
   .then((callbacks)=>{
       res.json(callbacks);
   }).catch(next)
});
module.exports=router;