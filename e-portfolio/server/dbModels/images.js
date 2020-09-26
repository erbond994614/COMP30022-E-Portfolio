const mongoose = require('mongoose')

//define schema
const imageschema = mongoose.Schema({
    name: {type: String},
    owner: {type: String},
    mimetype: {type: String},
    size: {type: Number},
    image: {type: String}
})

const Image = mongoose.model("Image", imageschema)
module.exports = Image