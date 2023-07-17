const express=require("express")
const mongoose=require("mongoose")

const connection=async()=>{
await mongoose.connect("mongodb+srv://aaditya:aaditya@cluster0.lfdbumj.mongodb.net/mock6?retryWrites=true&w=majority")

}
module.exports=
    connection
