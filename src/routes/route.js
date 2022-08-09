const express = require('express')
const underscore=require('underscore')
const logger = require("../logger/logger.js")
const helper = require("../util/helper.js")
const validator=require("../validator/formatter.js")
const helloChunk=require("../hello/hello")
const router=express.Router();
router.get('/test-me', function (req, res) {
    res.send("My first ever api hello Anmol")
    logger.welcome()
    helper.printDate()
    helper.month()
    helper.batchInfo()
    validator.trimString()
    validator.changetoLowerCase()
    validator.changetoUpperCase()
    helloChunk.lodashChunk()
    helloChunk.loDashTail()
    helloChunk.lodashUnion()
});


router.get('/test-me1', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason