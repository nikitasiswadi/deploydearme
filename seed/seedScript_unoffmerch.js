const mongoose = require('mongoose');
const Product_unoffmerch = require('../models/product_unoffmerch');


mongoose.connect(('mongodb+srv://project_uas:projectuasmongodb@cluster0.8vmwj.mongodb.net/projectdearme?retryWrites=true&w=majority'), (err, res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Database terhubung seed unoffmerch');
    }
})

const products = [
    new Product_unoffmerch({
        imagePath: 'images/unoff merch/keychain tbz.jpeg',
        name: 'THE BOYZ Generation Z Acrylic Keychain',
        price: 45000,
        deskripsi: 'Cute THE BOYZ Generation Z acrylic keychain by noqchalatte'
    }),
    new Product_unoffmerch({
        imagePath: 'images/unoff merch/keychain bts.jpeg',
        name: 'Bangtan Candy Pop Keychain',
        price: 38500,
        deskripsi: 'Fresh looking Bangtan Candy Pop Keychain by bangbang_goods'
    }),
    new Product_unoffmerch({
        imagePath: 'images/unoff merch/stiker tbz.jpeg',
        name: 'THE BOYZ Thrill Ride Sticker Set',
        price: 35000,
        deskripsi: 'Delicate set of THE BOYZ Thrill Ride tincase sticker by kulkit'
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