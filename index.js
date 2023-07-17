const quizroutes = require("./routes/quizes");
const users = require("./routes/users");
const express = require('express');
const leaderboard=require("./routes/leaderboard")
const app = express();
app.use(express.json());
const connection = require("./database/mongodb");
app.use("/leader",leaderboard)
app.use('/reg', users); 
app.use('/create', quizroutes); 
app.listen(3000, () => {
    connection()
  console.log('Server started on port 3000');
});
