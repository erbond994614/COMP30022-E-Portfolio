const mongoose = require('mongoose')

const connection = "mongodb+srv://joey:joey@cluster0.lyfeq.mongodb.net/Cluster0?retryWrites=true&w=majority"


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