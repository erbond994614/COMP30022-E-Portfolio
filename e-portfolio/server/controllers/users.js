const User = require("../dbModels/users")
const bcrypt = require("bcrypt")

//Add a new user to the database
const createUser = async function (req, res) {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send({
            email: user.email,
            password: user.password,
            portfolio: user.portfolio
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
    const user = await User.findOne({username: req.body.username})
    if (!user) {
        res.status(400).send({
            error: "Username does not exist"
        })
    } else if (bcrypt.compareSync(req.body.password, user.password)) {
        res.status(200).send(req.body)
    } else {
        res.status(400).send({
            error: "Incorrect Username or Password"
        })
    }
}

const getAllUsers = function(req, res) {

}

module.exports = {
    createUser,
    loginUser,
    getAllUsers
}