const express = require('express');
const router =express.Router();
const Plus = require('../models/plus')
const auth = require('../auth');

router.post('/Plus',(req,res,next)=>{
    Plus.create({
        CollegeName:req.body.CollegeName,
        Location:req.body.Location,
        detail:req.body.detail,
        image:req.body.image
    }).then((callbacks)=>{
        res.json( {status:"Plus successfully Added",callback:callbacks});
        console.log(callbacks);
    }).catch(next);

});

router.get('/all',(req,res,next)=>{
   Plus.find({})
   .then((callbacks)=>{
       res.json(callbacks);
   }).catch(next)
});
module.exports=router;