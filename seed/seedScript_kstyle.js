const mongoose = require('mongoose');
const Product_kstyle = require('../models/product_kstyle');


mongoose.connect(('mongodb+srv://project_uas:projectuasmongodb@cluster0.8vmwj.mongodb.net/projectdearme?retryWrites=true&w=majority'), (err, res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Database terhubung seed kstyle');
    }
})

const products = [
    new Product_kstyle({
        imagePath: 'images/K-Style/butter shirt.png',
        name: 'Stripped S/S T-Shirt (Multi)',
        price: 594844,
        deskripsi: 'This white & yellow stripe t-shirt is full of summer vibes!'
    }),
    new Product_kstyle({
        imagePath: 'images/K-Style/Christmassy! MD 06 - Sweatshirts.jpg',
        name: 'THE BOYZ "Christmassy!" Official MD 06 - Sweatshirt',
        price: 526828,
        deskripsi: 'This sweatshirt will definitely fit your "Christmassy!" vibes!'
    }),
    new Product_kstyle({
        imagePath: 'images/K-Style/marni jimin.png',
        name: 'MARNI Flower Pin Hooded Sweatshirt',
        price: 982715,
        deskripsi: 'Made from 100%cotton jersey, this purple hooded sweatshirt is from Marni!'
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