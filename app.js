const express = require('express')
const connectToDatabase = require('./Database')
const Book = require('./model/bookmodel')
const app = express()
//Alernative
//const app = require('express')()

app.use(express.json())

connectToDatabase()


app.get("/",(req,res)=>{
 
    res.status(201).json({
      "message" : "sucess"
      })
  })
  // crated book 
  app.post("/book",async(req,res)=>{
    
    const {bookName,bookPrice,isbnNumber,autherName,publishedAt,publication} =req.body
    await Book.create({
          bookName,
          bookPrice,
          isbnNumber,
          autherName,
          publishedAt,
          publication
    })

  res.status(201).json({
      message : "Book Created Sucessfully"
    })

  })
   //  all read 
  app.get("/book",async(req,res)=>{
    const book = await Book.find() //return array ma garxa
    res.status(200).json({
      message : "Book featched Sucessfully",
      data : book
    })
  })


// single read
app.get("/book/:id",async(req,res)=>{
  const id = req.params.id
  const book = await Book.findById(id) //return object garxa
  res.status(200).json({
    message : "Single Book Fetched Sucessfully",
    data : book
  })

})



app.listen(3000,()=>{
 console.log("Nodejs server has started at port 3000")
})