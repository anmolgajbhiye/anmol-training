function trimString(){
  const stringSomething="  functionup  " 
  console.log("Before execute trim function ",stringSomething+". ")
  console.log("After execute trim function ",stringSomething.trim()+". ")
}
function changetoLowerCase(){
 const changetoLowerString="AnMoL"
 console.log("This is string before change to lowerCase",changetoLowerString)
 console.log("This is the string after change to upperCase",changetoLowerString.toLowerCase())

}
function changetoUpperCase(){
    const changetoUpperString="heLLo AnMoL"
    console.log("This is string before change to lowerCase",changetoUpperString)
    console.log("This is the string after change to upperCase",changetoUpperString.toUpperCase())
   
   }
  module.exports.trimString=trimString
  module.exports.changetoLowerCase=changetoLowerCase
  module.exports.changetoUpperCase=changetoUpperCase 