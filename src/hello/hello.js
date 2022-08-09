const x= require('underscore')
function lodashChunk(){
const m =x.chunk(["january","february","march","april","may","june","july","august","september","october","november","december"], 4)    
console.log(m)
}
function loDashTail(){
const t= x.tail([1,3,5,7,9,11,13,15,17,19])
console.log(t)
}
function lodashUnion(){
 const u=x.union([["horror","the shining"],["drama","titanic"],["thriller","shutter island"],["fantasy","laby pans"]])
 console.log(u)   
}
module.exports.lodashChunk=lodashChunk
module.exports.loDashTail=loDashTail
module.exports.lodashUnion=lodashUnion
