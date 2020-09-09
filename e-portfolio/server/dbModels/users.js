const mongoose = require('mongoose')
const bcrpyt = require('bcrypt')

//Define schema
const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true, lowercase: true},
    password: {type: String, required: true, minlength: 6}
})

//Hash password
userSchema.pre('save', function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = bcrpyt.hashSync(user.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema)
module.exports = User