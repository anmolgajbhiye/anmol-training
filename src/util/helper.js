function printDate(){
 const today=new Date()
 console.log("print current date",today.getDate())   
}
function printMonth(){
    const month= new Date()
    console.log("print current month", month.getMonth()+1)

}
function getBatchInfo(){
 console.log("Plutonium,W3D3,topic for today is Nodejs module system")   
}
module.exports.printDate=printDate
module.exports.month=printMonth
module.exports.batchInfo=getBatchInfo