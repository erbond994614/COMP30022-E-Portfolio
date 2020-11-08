const mongoose = require('mongoose')

//define schema
const certificatesShema = mongoose.Schema({
    name: {type: String},
    size: {type: Number},
    data: {type: String},
    authentication:{type:Boolean,default:false,required:true}
})

module.exports = certificatesShema