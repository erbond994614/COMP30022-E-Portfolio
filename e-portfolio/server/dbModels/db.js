const mongoose = require('mongoose')

const connection = "mongodb://localhost:27017/e-portfolio"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

//connect to database
mongoose.connect(connection, options).then(function () {
    console.log("connected to Database")
}, err => {
    console.log("Failed Database Connection")
})

//load database models
require('./users')