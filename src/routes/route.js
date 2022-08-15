const express = require('express');
const router = express.Router();



router.post("/voting", function(req,res){
let person=[
    {
    name: "Anmol Gajhiye",
    age: 26,
    votingStatus: true

    },{
     name: "gunjan meshram",
     age: 18,
     votingStatus: true
    },{
    name: "Amit trivedi",
    age: 15,
    votingStatus: false
    },
    {
     name: "Divakar rao",
     age:"40",
     votingStatus: true   
    },
    {
     name: "triveni dwivedi",
     age: 25,
     votingStatus: true   
    }
]
inputAge=req.query.votingAge;
person.map(per=>(per.age>inputAge)?per.votingStatus=true:per.votingStatus);
let final=person.filter(pson=>{if(pson.votingStatus==true) {return pson.name}});
  res.send({data:final})  
})

router.post("/players", function(req,res){
    let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
let data=req.body.name
let sData=req.body
let newArray
let l=players.length
console.log(sData)
console.log(data)
for(let i=0;i<l;i++){
  if(data===players[i].name){
return res.send("Already exist")
  }
  else{
    newArray=players.concat(sData)
  }  
}
res.send({players:newArray})

   
   });


   


  
module.exports = router;





/*router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})*/

//module.exports = router;