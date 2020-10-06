const File = require('../dbModels/files')

const uploadFile = async function(req, res) {
    try {
        if (req.files) {
            const input = req.files.input
            const file = new File({
                name: input.name,
                owner: req.user.email,
                mimetype: input.mimetype,
                size: input.size,
                file: input.data.toString('base64')
            })
            await file.save()
            res.status(201).send({id: file._id, file})
        } else {
            res.status(400).send({error: "No file found"})
        }
    } catch (error) {
        res.status(400).send({errorCode: error.code})
    }
}

const getFile = async function (req, res) {
    const file = await File.findOne({_id: req.params.fileId})
    if (!file) {
        res.status(400).send({error: 'Could not find the file'})
    } else {
        res.status(201).send({id: file._id, file})
    }
}

const getUserFiles = function(req, res) {
    File.find({owner: req.params.userEmail}, (err, items) => {
        if (err) {
            console.log(err)
            res.status(400).send("Unable to find any files")
        } else {
            res.status(201).send(items)
        }
    })
}

module.exports = {uploadFile, getFile, getUserFiles}