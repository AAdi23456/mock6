const mongoose = require("mongoose")

const leaderboardSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    score: {
      type: Number,
      required: true
    },
    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true
    }
  });
const leaderboardmodel = mongoose.model("leaderboard", leaderboardSchema)
module.exports = leaderboardmodel
