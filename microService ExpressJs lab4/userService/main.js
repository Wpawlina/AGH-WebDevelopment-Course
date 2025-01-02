const express = require('express');

const User = require('./users_model.js');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });

const SECRET_KEY=process.env.SECRET_KEY;

const app = express();
app.use(express.json());


app.post('/api/register',async (req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({message:'All fields are required'});
    }
    try{
        //check if user already exists
        const user=await User.findOne({where:{email}});
        if(user){
            return res.status(400).json({message:'User already exists'});
        }
        const newUser = await User.create({email,password});
        res.status(201).json({user_id:newUser.id});

    }catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    } 
})

app.post('/api/login',async (req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({message:'All fields are required'});
    }
    try{
        const user=await User.findOne({where:{email}});
        if(!user){
            return res.status(400).json({message:'Invalid credentials'});
        }
     
        if(user.password!==password){
            return res.status(400).json({message:'Invalid credentials'});
        }
        const token=jwt.sign({id:user.id,email:email},SECRET_KEY);
        res.status(200).json({token});
        }catch(err){
            console.error(err);
            res.status(500).json({message:'Internal server error'});
        }
})

app.listen(3002, () => {
    console.log('Server is running on http://localhost:3002');
});