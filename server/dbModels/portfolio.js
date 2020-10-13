const mongoose = require('mongoose')
const fileSchema = require('./files')

const portfolioSchema = mongoose.Schema({
    info: {
        name: {type: String, required: true, minlength: 3},
        age: {type: Number, required: true},
        major: {type: String, required: true},
        profilePicture: fileSchema
    },
    aboutMe: {
        para1: {type: String, required: true},
        para2: {type: String, required: true},
        para3: {type: String, required: true}
    },
    downloads: [fileSchema]
})

module.exports = portfolioSchema