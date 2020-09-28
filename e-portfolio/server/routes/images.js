const express = require('express')

const router = express.Router()
const auth = require('../middleware/auth')
const controller = require('../controllers/images')

router.post('/upload', auth, controller.uploadImage)

router.get('/:userEmail', controller.getUserImages)

router.get('/:userEmail/:imageId', controller.getImage)

module.exports = router