const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel=require("../models/authorModel")

const createAuthor=async function(req,res){
   let data= req.body
   let createAuthor= await AuthorModel.create(data)
   let saveData= data.author_id
   if (!saveData) {
    return res.send("Author id is not present")
   }
    else{
        res.send(createAuthor)
    }
   
}

const createBook= async function(req,res){
 let data= req.body
 let savadata=data.author_id
 let createBook=await BookModel.create(data)
 console.log(createBook)
 if (!savadata){
    return res.send("Author id is not present")

 } 
 else{
  res.send(createBook)  
 }  
}

const getBooksbyNilesh=async function (req,res){
  let data= await AuthorModel.find({authour_name: "Nilesh"}).select("author_id")
  let bookData=await BookModel.find({author_id: data[0].author_id})
  console.log(data)
  console.log(bookData)
  res.send({msg: bookData})  
}

const authorofBook= async function(req,res){
   let data= await BookModel.findOneAndUpdate({name:"jag"},{$set:{prices:100}},{new:true})
   let authorData= await AuthorModel.find({author_id: data.author_id}).select("authour_name")
   let price= data.prices
   res.send({msg: authorData,price})
}

const findBook=async function(req,res){
  let data=await BookModel.find()
  let arr=[]
  for (let i=0;i<data.length;i++){
    if (data[i].prices >=50 && data[i].prices<=100){
        arr.push(data[i])
    }
  } 
  
 console.log(arr)
 console.log(data)
 res.send(arr)
}

const authorsAbove= async function(req,res){
    let data = await BookModel.find()
    let dataAuthour= await AuthorModel.find()
    let arr= []
    for (let i=0;i<data.length;i++){
        for(let j=0;j<dataAuthour.length;j++){
            if(data[i].rating>4){
                if(dataAuthor[j].age>50){
                    arr.push(dataAuthour[j].authour_name,dataAuthour[j].age)
                }
                

            }
        }
    }
    let uniqueChars=[...new Set(arr)];
    console.log(uniqueChars)
    res.send(uniqueChars)
}


/*const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks*/
module.exports.createAuthor=createAuthor

module.exports.createBook=createBook
module.exports.getBooksbyNilesh= getBooksbyNilesh
module.exports.authorofBook=authorofBook
module.exports.findBook=findBook


