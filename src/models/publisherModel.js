const mongoose=require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId
const publisherSchema=new mongoose.model({
 name: String,
 //author_id: {
    //type: ObjectId,
    //ref: "Puublisher"

 headQuarter: String  
},{timestamps:true})

module.exports=mongoose.model('NewPublisher',publisherSchema)