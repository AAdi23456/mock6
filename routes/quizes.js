const quizmodel = require("../models/quizes");

const express=require("express")
const quizroutes=express.Router()



quizroutes.post('/quiz', async (req, res) => {
    try {
      const data = req.body;
     
     
      const quiz = new quizmodel(data)
     
      
     
      const savedQuiz = await quiz.save();
      
      res.status(201).json({msg:"quiz added successfully"});
    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  quizroutes.get("/quizes",async(req,res)=>{
    try {
        const data=await quizmodel.find()
    return res.status(200).json({data:data})
    } catch (error) {
        return res.status(500).json(error)
    }
    
  })
  module.exports=quizroutes