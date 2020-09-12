const express = require('express')

const router = express.Router()
const controller = require('../controllers/images')
const upload = require('../middleware/upload')

router.post('/upload', controller.uploadImage)

router.get('/', controller.getAllImages)

module.exports = router