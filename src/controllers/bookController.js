const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")


const registerBook=async function(req,res){
let book= req.body
let authorId= book.author
let publisherId=book.publisher
if(!authorId) return res.send("Author datails are required")

let author=await authorModel.findById(authorId)
if(!author) return res.send("no author is present at this id")

if(!publisherId) return res.send("publisher details are required")

let publisher=await publisherModel.findById(publisherId)
if(!publisher) return res.send("no publisher is present with the given publisher id")

let bookCreated= await bookModel.create(book)
return res.send({data: bookCreated})

}

const getBooks=async function (req,res){
    let books= await bookModel.find().populate("author publisher")
    res.send({data:books})
}

/*const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails*/


module.exports.registerBook=registerBook
module.exports.getBooks=getBooks