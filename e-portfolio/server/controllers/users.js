const createUser = function(req, res) {
    console.log("server Recieved ", req.body)
    res.status(200)
    res.send({message: "Recieved post request"})
}

const getUser = function(req, res) {

}

const getAllUsers = function(req, res) {

}

module.exports = {
    createUser,
    getUser,
    getAllUsers
}