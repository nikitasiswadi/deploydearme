const mongoose = require('mongoose')

const productschemaalbum = mongoose.Schema({
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

module.exports = mongoose.model("Product_album", productschemaalbum, 'album')