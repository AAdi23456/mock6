const mongoose = require("mongoose")

const reg_schema = mongoose.Schema({
    username: { type: String,required:true},
    email: { type: String,required:true}
  

})
const reg_model = mongoose.model("signupdetails", reg_schema)
module.exports = reg_model
