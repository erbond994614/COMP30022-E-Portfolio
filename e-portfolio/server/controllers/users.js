const User = require("../dbModels/users")
const bcrypt = require("bcrypt")

//Add a new user to the database
const createUser = async function (req, res) {
    try {
        const user = new User(req.body)
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({
            user: user.toObject(),
            token
        })
    } catch (error) {
        if (error.code == 11000) {
            res.status(400).send({
                error: "username already exists"
            })
        } else {
            res.status(400).send({
                error: `Error code ${error.code} Occured`
            })
        }
    }
}

//login user and retrieve their page
const loginUser = async function(req, res) {
    const user = await User.findOne({email: req.body.email})
    if (!user) {
        res.status(400).send({
            error: "Username does not exist"
        })
    } else if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = await user.generateAuthToken()
        res.status(201).send({
            user,
            token
        })
    } else {
        res.status(400).send({
            error: "Incorrect Username or Password"
        })
    }
}

const logoutUser = async function(req, res) {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token
        })
        await req.user.save()
        res.status(201).send()
    } catch (error) {
        res.status(400).send({error: "an unknown error occured"})
    }
}

const updatePortfolio = async function(req, res) {
    const user = await User.findOne({email: req.user.email})
    if (user) {
        user.updateOne({portfolio: req.body}, (err) => {
            if (err) {
                res.status(400).send({error: "portfolio update failed"})
            } else {
                res.status(201).send(user)
            }
        })
    } else {
        res.status(400).send({error: "User does not exist"})
    }
}

const getPortfolio = async function(req, res) {
    const user = await User.findOne({email: req.params.userEmail})
    if (user) {
        res.status(201).send(user.portfolio)
    } else {
        res.status(400).send({error: "Unable to find user"})
    }
}

module.exports = {
    createUser,
    loginUser,
    logoutUser,
    updatePortfolio,
    getPortfolio
}