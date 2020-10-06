const express = require('express')

const router = express.Router()

const userRouter = require('./users')
const fileRouter = require('./files')

router.use('/users', userRouter)

router.use('/files', fileRouter)

module.exports = router