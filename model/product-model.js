
const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
    owner: {
        type: String,
        require: true
    },
    productName: {
        type: String,
        require: true
    },
    productPrice: {
        type: Number,
        require: true
    },
    productDescription: {
        type: String,
        require: true
    },
    productIMG: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    productType: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    product: "Products"
})
module.exports = mongoose.model("Products", ProductsSchema)