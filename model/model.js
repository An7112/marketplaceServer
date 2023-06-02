
const mongoose = require('mongoose')

const StoresSchema = mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    storeName: {
        type: String,
        require: true
    },
    storeDescription: {
        type: String,
        require: true
    },
    storeAvatar: {
        type: String,
        require: true
    },
    storeBanner: {
        type: String,
        require: true
    },
    storeProductLength: {
        type: Number,
        require: true
    },
    purchased: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    stores: "Stores"
})
module.exports = mongoose.model("Stores", StoresSchema)