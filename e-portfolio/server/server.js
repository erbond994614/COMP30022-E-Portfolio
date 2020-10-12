const express = require('express')
const fileUpload = require('express-fileupload')
const path = require('path')
const router = require('./routes/routes.js')

//Start the server
const  server = express()
let port = process.env.PORT
if (!port) {
    port = 8000
}

//Connect database
require('./dbModels/db')

//Setup routes
server.use(express.json())
server.use(fileUpload({
    limits: { fileSize: 10 * 1024 * 1024}, // 10MB
    abortOnLimit: true
}))
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