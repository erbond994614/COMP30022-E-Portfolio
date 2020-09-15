const express = require('express')

const router = express.Router()
const controller = require('../controllers/images')

router.post('/upload', controller.uploadImage)

router.get('/:imageName', controller.getImage)

router.get('/', controller.getAllImages)

module.exports = router