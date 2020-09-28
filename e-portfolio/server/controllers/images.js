const Image = require('../dbModels/images')

const uploadImage = async function(req, res) {
    try {
        if (req.files) {
            const input = req.files.input
            const image = new Image({
                name: input.name,
                owner: req.user.userEmail,
                mimetype: input.mimetype,
                size: input.size,
                image: input.data.toString('base64')
            })
            await image.save()
            res.status(201).send({id: image._id, image})
        } else {
            res.status(400).send({error: "No file found"})
        }
    } catch (error) {
        res.status(400).send({errorCode: error.code})
    }
}

const getImage = async function (req, res) {
    const image = await Image.findOne({_id: req.params.imageId})
    if (!image) {
        res.status(400).send({error: 'Could not find the image'})
    } else {
        res.status(201).send({id: image._id, image})
    }
}

const getUserImages = function(req, res) {
    Image.find({owner: req.params.userEmail}, (err, items) => {
        if (err) {
            console.log(err)
            res.status(400).send("Unable to find any images")
        } else {
            res.status(201).send(items)
        }
    })
}

module.exports = {uploadImage, getImage, getUserImages}