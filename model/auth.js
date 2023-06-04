
const mongoose = require('mongoose')

const AuthSchema = mongoose.Schema({
    displayName: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
}, {
    auth: "Auth"
})
module.exports = mongoose.model("Auth", AuthSchema)