const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')
const router = require('./routes/routes.js')

//Start the server
const  server = express()
const port = 8000

//Connect database
require('./dbModels/db')

//Setup routes
server.use(express.json())
server.use(fileUpload())
server.use('/api', router)

//Setup client path
const buildPath = path.join(__dirname, '../build')
server.use(express.static(buildPath))
server.get('*', function (req, res) {
    res.sendFile(path.join(buildPath, 'index.html'))
})

//Open server listener
server.listen(port, function() {
    console.log(`server started on port ${port}`)
})