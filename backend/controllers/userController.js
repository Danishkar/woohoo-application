const User = require("../models/userModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const validator = require("validator")

// login user
const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try {
        // const user = await User.login(email,password);
        if (!email || !password){
            throw Error("All fields must be filled")
        }
        const user = await User.findOne({email});
        if (!user){
            throw Error("Incorrect email")
        }
        const match = await bcrypt.compare(password, user.password);
        if(!match){
            throw Error("Incorrect password")
        }
        await res.status(200).json(user.email)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// sign up user
const signUpUser = async(req,res)=>{
    console.log(req.body)
    const {name ,email, password} = req.body;
    try {
        // const user = await User.signup(email,password);
        if (!email || !password){
            throw Error("All fields must be filled")
        }
        if(!validator.isEmail(email)){
            throw Error("Enter a valid email")
        }
        // if (!validator.isStrongPassword(password)){
        //     throw Error("password not strong enough")
        // }
        const exists = await User.findOne({email});
        if (exists){
            throw Error("Email already exists")
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
    
        const user = await User.create({name, email, password:hash})
        await res.status(200).json(user.email)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {loginUser,signUpUser}