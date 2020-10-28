const mongoose = require('mongoose')
const fileSchema = require('./files')

const portfolioSchema = mongoose.Schema({
    profilePicture: fileSchema,
    info: {type: Map, of: String, required: true},
    aboutMe: {
        para1: {type: String, required: true},
        para2: {type: String, required: true},
        para3: {type: String, required: true}
    },
    blog:[{file: fileSchema, text: {type: String}}],
})

module.exports = portfolioSchema