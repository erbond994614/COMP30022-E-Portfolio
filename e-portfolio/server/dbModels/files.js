const mongoose = require('mongoose')

//define schema
const fileschema = mongoose.Schema({
    name: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    data: {type: String}
})

module.exports = fileschema