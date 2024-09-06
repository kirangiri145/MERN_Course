const mongoose = require('mongoose')
const ConnectionString = "mongodb+srv://kiran:12345@cluster0.2kec1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectToDatabase(){
    await mongoose.connect(ConnectionString)
    console.log("Connected Sucessfully")
  }
  module.exports = connectToDatabase