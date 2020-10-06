const mongoose = require('mongoose')

//define schema
const fileschema = mongoose.Schema({
    name: {type: String},
    owner: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    file: {type: String}
})

const File = mongoose.model("File", fileschema)
module.exports = File


