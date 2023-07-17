const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
    creator: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
     
    },
    questions: [
      {
        title: {
          type: String,
          required: true
        },
        answerOptions: {
          type: [String],
          required: true
        },
        correctOptions: {
          type: [Number],
          required: true
        }
      }
    ]
  });
const quizmodel = mongoose.model("quizees", quizSchema)
module.exports = quizmodel
