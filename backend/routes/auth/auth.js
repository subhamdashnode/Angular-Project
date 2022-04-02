const express=require('express');
const router=express.Router();
const Auth=require('../../models/Auth/Auth');
const JWT_SECRET='subhamdash';
const jwt = require('jsonwebtoken');
const fetchuser = require('../../middleware/jwt');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');


// Route:1 for createuser NEW-USER POST request
router.post('/createuser',[
    body('email','email should not empty').isEmail(),
    body('password','password must be three character').isLength({min:3})
],async(req,res)=>{
    //if there are no errors ,return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // check wheather the email is exits or not
    try {
        let user=await Auth.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({error:"sorry the user is already exits"});
        }
        // generate the salt
        const salt=await bcrypt.genSalt(10);
        const secpass=await bcrypt.hash(req.body.password,salt);

        user=await Auth.create({
            email:req.body.email,
            password:secpass
        })
        const data={
            user:{
                id:user.id
            }
        }
        // generate a authToken
        const authToken=jwt.sign(data,JWT_SECRET);
        res.json({authToken});
    } catch (error) {
        return res.status(500).json({error:"internal server error"});
    }
})
// Route:2 for login user POST request
router.post('/login',[
    body('email','email should not empty').isEmail(),
    body('password','password must be three character').isLength({min:3})
],async(req,res)=>{
    //if there are no errors ,return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {email,password}=req.body;
    try {
        // check the email is exits or not
        const checkEmail=await Auth.findOne({email});
        if(!checkEmail){
            return res.status(404).json({error:"sorry user with this email is not exits"});
        }
        // compire the password
        const passCompare=await bcrypt.compare(password,checkEmail.password);
        if(!passCompare){
            return res.status(400).json({error:"please valid with correct creadentials"});
        }

        const data={
            user:{
                id:checkEmail.id
            }
        }
        // generate a authToken
        const authToken=jwt.sign(data,JWT_SECRET);
        res.json({authToken});
    } catch (error) {
        return res.status(500).json({error:"internal server error"});
    }
})
module.exports=router;