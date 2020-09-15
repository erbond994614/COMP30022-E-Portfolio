const Image = require('../dbModels/images')

const uploadImage = async function(req, res) {
    try {
        if (req.files) {
            const input = req.files.input
            const image = new Image({
                name: input.name,
                mimetype: input.mimetype,
                size: input.size,
                image: input.data.toString('base64')
            })
            await image.save()
            res.status(200).send({success: "image was stored sucessfully", image_id: image._id})
        } else {
            res.status(400).send({message: "No file found"})
        }
    } catch (error) {
        res.status(400).send({errorCode: error.code})
    }
}

const getImage = async function (req, res) {
    const image = await Image.findOne({name: req.params.imageName})
    if (!image) {
        res.status(400).send({msg: 'Could not find the image'})
    } else {
        res.status(200).send(image)
    }
}

const getAllImages = function(req, res) {
    Image.find({}, (err, items) => {
        if (err) {
            console.log(err)
            res.status(400).send("Unable to find any images")
        } else {
            res.status(200).send(items)
        }
    })
}

module.exports = {uploadImage, getImage, getAllImages}