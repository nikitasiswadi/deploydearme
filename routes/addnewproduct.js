const express = require('express')
const router = express.Router();
const Product_album = require('../models/product_album')
const Product_officialmerch = require('../models/product_officialmerch')


router.get('/newproductalbum', (req, res) => {
    res.render('pages/admin/addnew_productalbum');
})

router.get('/newproductofficialmerch', (req, res) => {
    res.render('pages/admin/addnew_productofficialmerch');
})

router.post('/addnewproduct_album', async (req, res) => {

    const image_path = req.body.image_path;
    const name= req.body.name;
    const price = req.body.price;
    const deskripsi = req.body.deskripsi;
    const newproduct = new Product_album({
        imagePath: image_path,
        name: name,
        price: price,
        deskripsi: deskripsi
    });
    await newproduct.save((err, res) => {
        if (err) console.error(err);
        else {
            console.log('Add New Product Succesful!')
        }
    })
       res.redirect('/albumadmin');
})

router.post('/addnewproduct_officialmerch', async (req, res) => {

    const image_path = req.body.image_path;
    const name= req.body.name;
    const price = req.body.price;
    const deskripsi = req.body.deskripsi;
    const newproduct = new Product_officialmerch({
        imagePath: image_path,
        name: name,
        price: price,
        deskripsi: deskripsi
    });
    await newproduct.save((err, res) => {
        if (err) console.error(err);
        else {
            console.log('Add New Product Succesful!')
        }
    })
    
    res.redirect('/officialmerchadmin');
})

module.exports = router;