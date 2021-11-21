const mongoose = require('mongoose');
const Product_album = require('../models/product_album');


mongoose.connect(('mongodb+srv://project_uas:projectuasmongodb@cluster0.8vmwj.mongodb.net/projectdearme?retryWrites=true&w=majority'), (err, res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Database terhubung seed album');
    }
})

const products = [
    new Product_album({
        imagePath: 'images/Album/Dreamlike-DayVer.jpg',
        name: 'THE BOYZ - Dreamlike (Day Ver)',
        price: 312256,
        deskripsi: 'THE BOYZ 4th Mini Album'
    }),
    new Product_album({
        imagePath: 'images/Album/Dreamlike-DiyVer.jpg',
        name: 'THE BOYZ - Dreamlike (Diy Ver)',
        price: 312256,
        deskripsi: 'THE BOYZ 4th Mini Album'
    }),
    new Product_album({
        imagePath: 'images/Album/Dreamlike-DreamlikeVer.jpg',
        name: 'THE BOYZ - Dreamlike (Dreamlike Ver)',
        price: 312256,
        deskripsi: 'THE BOYZ 4th Mini Album'
    })
]

var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save((err, res) => {
        done++;
        if (done == products.length) {
            console.log('Produk-produk berhasil diupload');
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}