const mongoose = require('mongoose')

//define schema
const imageschema = mongoose.Schema({
    name: {type: String},
    image: {data: Buffer, mimetype: String}
})

const Image = mongoose.model("Image", imageschema)
module.exports = Image