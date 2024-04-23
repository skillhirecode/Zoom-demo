const express=require('express')
const router=express.Router()
const User=required('../models/User')
const {body, validateResult }=require('express-validator')
router.post("/Loginuser",async(req,res)=>(
body("email",isEmail(),
body("name"),isLength({min:5}),
body("password","Incorrect password").isLength({min:5})))
,async (req,res)=>{
    const errors=validateResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
try{
      let userData =await User.findOne({email});
      if(!userData){
        return res.status(4000).json({errors:"Try logging with correct credentials"})
      }
      if(!req.body.password!==userData.password){
        return res.status(4000).json({errors:"Try logging with correct credentials"})
      }
     
    res.json({success:true});


}catch (error){
    console.log(error)
    res.json({auccess:false});
}
}
),

module.exports=router;