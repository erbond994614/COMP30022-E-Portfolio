const jwt = require('jsonwebtoken')
const User = require('../dbModels/users')

const auth = async (req, res, next) => {
    const token = req.header('Authorization')
    const data = jwt.verify(token, "secret key")
    const user = await User.findOne({ _id: data._id, 'tokens.token': token })
    if (user) {
        req.user = user
        req.token = token
        next()
    } else {
        res.status(401).send({ error: "unauthorized access" })
    }
}

module.exports = auth