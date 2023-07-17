const leaderboardmpodel = require("../models/leaderboard");

const express=require("express")
const router=express.Router()
router.get('/show/:id', async (req, res) => {
    try {
        const {id}=req.params
      const leaderboard = await leaderboardmpodel.find({quiz:id})
      res.json(leaderboard);
    } catch (error) {

        console.log(error);
      res.status(500).json({ error: 'Failed to fetch leaderboard entries' });
    }
  });
  
 
  router.post('/new', async (req, res) => {
    try {
      const { email, score, quizId } = req.body;
  
   
      const leaderboardEntry = new leaderboardmpodel({
        email: email,
        score: score,
        quiz: quizId,
      });
  
      const savedEntry = await leaderboardEntry.save();
      console.log(savedEntry)
      res.status(201).json(savedEntry);

    } catch (error) {
        console.log(error);
      res.status(500).json({ error: 'Failed to create leaderboard entry' });
    }
  });
  module.exports=router