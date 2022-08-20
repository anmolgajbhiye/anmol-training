const BookModel= require("../models/bookModel")
const BookController= require("../controllers/bookController")

const createNewBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//const getBooksData= async function (req, res) {
    //let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  )
    //res.send({msg: allBooks})
//}
const getBookPost=async function(req,res){
 let year =req.query.years
 let allBooks=await BookModel.find({year})
 res.send(allBooks)   
}
const getNewBook=async function(req,res){
 //let getAllBook=await BookModel.find().select({bookName:1,authorName:1})
 let getAllBook=await BookModel.find({totalPages:{$gt:500},stockAvailable:true})
 res.send(getAllBook)   
}

//module.exports.createBook= createBook
//module.exports.getBooksData= getBooksData
module.exports.createNewBook= createNewBook
module.exports.getBookPost= getBookPost
module.exports.getNewBook= getNewBook
