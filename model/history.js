
const mongoose = require('mongoose')

const HistorySchema = mongoose.Schema({
    ownerProduct: {
        type: String,
        require: true
    },
    productId: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    productIMG: {
        type: String,
        require: true
    },
    productPrice: {
        type: Number,
        require: true
    },
    buyer: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    history: "History"
})
module.exports = mongoose.model("History", HistorySchema)