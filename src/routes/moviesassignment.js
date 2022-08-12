const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get("/GET/movies",function(req,res){
   const movies=["rang de basanti","Duniyadari","mitwa"]
   res.send(movies)
})




router.get("/movies/:indexNumber",function(req,res){
 const movies=["rang de basanti","the shining","lord of the rings","batman begins"]
 console.log(req.params.indexNumber)
 let movieIndex= req.params.indexNumber
 
 if(movieIndex<0 || movieIndex>=movies.length){
 return res.send('The index value is not correct,please check it')   
 }
 let requireMovie=movies[movieIndex]
 res.send(requireMovie)
})

router.get("/films",function(req,res){
const films=[{
 "id":1,
 "name":"The shining"
},{
 "id":2,
 "name":"incendies"   
},{
"id":3,
"name":"Rang de basanti"    
},{
 "id":4,
 "name":"Findind Nemo"   
}

]
res.send(films)    
      
})

router.get("/films/:filmId",function(req,res){
    const films=[{
     "id":1,
     "name":"The shining"
    },{
     "id":2,
     "name":"incendies"   
    },{
    "id":3,
    "name":"Rang de basanti"    
    },{
     "id":4,
     "name":"Findind Nemo"   
    }
    
    ]
    let filmId=req.params.filmId
    for(let i=0;i<films.length;i++)
    {

     let film=films[i]
     if(film.id==filmId){
     return res.send(film)   
     }  
    }
res.send("Films not Match")
       
          
    })

/*router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    /*let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})*/

module.exports = router;