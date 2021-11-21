const mongoose = require('mongoose')

const productschemaunoffmerch = mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    deskripsi: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Product_unoffmerch", productschemaunoffmerch, 'unoffmerch')