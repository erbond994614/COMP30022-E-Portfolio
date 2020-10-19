const express = require('express')

const router = express.Router()
const auth = require('../middleware/auth')
const controller = require('../controllers/users')

//Add new user to the database
router.post('/signup', controller.createUser)

//login user and retrieve their page
router.post('/login', controller.loginUser)

router.post('/logout', auth, controller.logoutUser)

router.put('/portfolio', auth, controller.updatePortfolio)

router.get('/:userId/portfolio', controller.getPortfolio)

router.post('/profilePicture', auth, controller.uploadProfilePicture)

module.exports = router