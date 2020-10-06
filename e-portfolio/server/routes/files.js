const express = require('express')

const router = express.Router()
const auth = require('../middleware/auth')
const controller = require('../controllers/files')

router.post('/upload', auth, controller.uploadFile)

router.get('/:userEmail', controller.getUserFiles)

router.get('/:userEmail/:fileId', controller.getFile)

module.exports = router