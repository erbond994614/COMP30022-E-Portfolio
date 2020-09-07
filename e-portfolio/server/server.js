const express = require('express')
const path = require('path')
const router = require('./routes/routes.js')

const  server = express()
const port = 3000

server.use(express.json())
server.use('/api', router)

const buildPath = path.join(__dirname, '../build')
server.use(express.static(buildPath))
server.get('*', function (req, res) {
    res.sendFile(path.join(buildPath, 'index.html'))
})

server.listen(port, function() {
    console.log(`server started on port ${port}`)
})