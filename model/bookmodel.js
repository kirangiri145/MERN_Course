const mongoose = require("mongoose")
const Schema = mongoose.Schema
const bookSchema = new mongoose.Schema({

    bookName :{
        type : String,
        unique : true
    },
    bookPrice : {
        type : Number
    },
    isbnNumber : {
        type : Number
    },
    autherName : {
        tpye : String
    },
    publishedAt : {
        type : String
    },
    publication : {
        type : String
    }
})

const Book = mongoose.model('Book',bookSchema)
module.exports = Book