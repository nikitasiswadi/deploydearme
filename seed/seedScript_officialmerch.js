const mongoose = require('mongoose');
const Product_officialmerch = require('../models/product_officialmerch');


mongoose.connect(('mongodb+srv://project_uas:projectuasmongodb@cluster0.8vmwj.mongodb.net/projectdearme?retryWrites=true&w=majority'), (err, res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Database terhubung seed official merch');
    }
})

const products = [
    new Product_officialmerch({
        imagePath: 'images/Official Merch/lightstick bts special edt.jpg',
        name: 'BTS Official Lightstick (MOTS Special Edition)',
        price: 1348720,
        deskripsi: 'BTS Lightstick - Army Bomb Map of The Soul Special Edition Ver 4'
    }),
    new Product_officialmerch({
        imagePath: 'images/Official Merch/Lightstick Toa TBZ.jpg',
        name: 'THE BOYZ Official Lightstick',
        price: 1263222,
        deskripsi: 'The Boyz official lightstick'
    }),
    new Product_officialmerch({
        imagePath: 'images/Official Merch/mini photocard r1.jpg',
        name: 'BTS Mini Photocard',
        price: 257774,
        deskripsi: 'A set of photocards inspired by concepts from "DALMAJUNG"'
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