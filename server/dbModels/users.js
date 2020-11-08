const mongoose = require('mongoose')
const bcrpyt = require('bcrypt')
const jwt = require('jsonwebtoken')
const portfolioSchema = require('./portfolio')
const filesSchema = require('./files');
const certificatesShema = require('./certificate');
const tokenSchema = mongoose.Schema({
    token: { type: String, required: true }
})

//Define schema
const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 6},
    role: {type: String, required: true},
    portfolio: portfolioSchema,
    certificates:[certificatesShema],
    avatar:filesSchema,
    tokens: [tokenSchema]
})

//Hash password
userSchema.pre('save', function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = bcrpyt.hashSync(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id }, "secret key")
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

const User = mongoose.model('User', userSchema)
module.exports = User