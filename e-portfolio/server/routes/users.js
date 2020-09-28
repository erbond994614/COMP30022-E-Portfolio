const express = require('express')

const router = express.Router()
const auth = require('../middleware/auth')
const controller = require('../controllers/users')

//Add new user to the database
router.post('/signup', controller.createUser)

//login user and retrieve their page
router.post('/login', controller.loginUser)

router.put('/:userEmail/portfolio', auth, controller.updatePortfolio)

module.exports = router