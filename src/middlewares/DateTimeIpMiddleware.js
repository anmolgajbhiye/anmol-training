const Mid1= function (req,res,next){
   console.log("Hello I am Middleware 1")
   next() 
}

module.exports.Mid1=Mid1