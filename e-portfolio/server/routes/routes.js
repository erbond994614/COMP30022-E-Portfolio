const express = require('express')

const router = express.Router()

const userRouter = require('./users')
const imageRouter = require('./images')

router.use('/users', userRouter)

router.use('/images', imageRouter)

module.exports = router