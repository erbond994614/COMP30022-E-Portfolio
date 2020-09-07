const express = require('express')

const router = express.Router()
const controller = require('../controllers/users')

router.post('/signup', controller.createUser)

router.get('/:user', controller.getUser)

router.get('/', controller.getAllUsers)

module.exports = router