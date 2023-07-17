const users=require("../models/users")
const express=require("express")
const usersRoute=express.Router()
const jwt=require("jsonwebtoken")

usersRoute.post("/signup", async (req, res) => {
    const { username, email } = req.body
    try {
      const userr=await users.findOne({email,username})
      console.log(userr);
      if(userr){
        return  res.status(200).json({ email: userr.email})
      }
        const datatodb = new users({ username, email })
        await datatodb.save()
        return  res.status(200).json({    email: userr.email})
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  })
  module.exports=usersRoute
