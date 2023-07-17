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
  quizroutes.get("/quize/:id",async(req,res)=>{
    try {
      const id=req.params.id
        const data=await quizmodel.findById(id)
    return res.status(200).json(data)
    } catch (error) {
      console.log(error);
        return res.status(500).json(error)
    }
    
  })
  quizroutes.delete('/quiz/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const deletedQuiz = await quizmodel.findByIdAndDelete(id);
      if (!deletedQuiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      return res.status(200).json({ msg: 'Quiz deleted successfully' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  quizroutes.put('/quiz/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const { title, description } = req.body;
      const updatedQuiz = await quizmodel.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      if (!updatedQuiz) {
        return res.status(404).json({ error: 'Quiz not found' });
      }
      return res.status(200).json({ msg: 'Quiz updated successfully' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  module.exports=quizroutes