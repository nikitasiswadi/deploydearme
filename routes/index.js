const express = require('express')
const Product_album = require('../models/product_album')
const Product_kstyle = require('../models/product_kstyle')
const Product_officialmerch = require('../models/product_officialmerch')
const Product_unoffmerch = require('../models/product_unoffmerch')
const Wish = require('../models/wish')
const Cart = require('../models/cart')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/index');
})

router.get('/admin', (req, res) => {
    res.render('pages/admin/index.ejs');
})

router.get('/album', async (req, res) => {
    var dataalbum = await Product_album.find();
    //console.log(dataalbum);
    res.render('pages/categories/album', {products: dataalbum});
})

router.get('/albumadmin', async (req, res) => {
    var dataalbum = await Product_album.find();
    //console.log(dataalbum);
    res.render('pages/admin/album_admin', {products: dataalbum});
})

router.get('/officialmerch', async (req, res) => {
    var dataofficialmerch = await Product_officialmerch.find();
    //console.log(dataofficialmerch);
    res.render('pages/categories/official_merch', {products: dataofficialmerch});
})

router.get('/officialmerchadmin', async (req, res) => {
    var dataofficialmerch = await Product_officialmerch.find();
    //console.log(dataofficialmerch);
    res.render('pages/admin/official_merch_admin', {products: dataofficialmerch});
})

router.get('/kstyle', async (req, res) => {
    var datakstyle = await Product_kstyle.find();
    //console.log(datakstyle);
    res.render('pages/categories/k-style', {products: datakstyle});
})

router.get('/kstyleadmin', async (req, res) => {
    var datakstyle = await Product_kstyle.find();
    //console.log(datakstyle);
    res.render('pages/admin/k-style_admin', {products: datakstyle});
})

router.get('/fanmademerch', async (req, res) => {
    var dataunoffmerch = await Product_unoffmerch.find();
    //console.log(dataunoffmerch, {products: dataunoffmerch});
    res.render('pages/categories/unoff_merch');
})

router.get('/fanmademerchadmin', async (req, res) => {
    var dataunoffmerch = await Product_unoffmerch.find();
    //console.log(dataunoffmerch, {products: dataunoffmerch});
    res.render('pages/admin/unoff_merch_admin');
})

router.get('/btsprofile', (req, res) => {
    res.render('pages/star/btsprofile');
})

router.get('/btsprofileadmin', (req, res) => {
    res.render('pages/admin/btsprofile_admin');
})

router.get('/tbzprofile', (req, res) => {
    res.render('pages/star/tbzprofile');
})

router.get('/tbzprofileadmin', (req, res) => {
    res.render('pages/admin/tbzprofile_admin');
})

router.get('/terms', (req, res) => {
    res.render('pages/terms');
})

router.get('/termsadmin', (req, res) => {
    res.render('pages/admin/terms_admin');
})

// router.get('/newproduct', (req, res) => {
//     res.render('pages/addnew_product');
// })

// router.get('/add-to-cart-album/:id', (req, res, next) => {
//     const productIdalbum = req.params.id;
//     const cartalbum = new Cart(req.session.cartalbum ? req.session.cartalbum : {});
 
//     Product_album.findById(productIdalbum, function(err, product_album) {
//         if (err) {
//             return res.redirect('/album');
//         }
//         cartalbum.add(product_album, product_album.id);
//         req.session.cartalbum = cartalbum;
//         console.log(req.session.cartalbum);
//         res.redirect('/album');
//     });
//  });

router.get('/add-to-cart-album/:id', (req, res, next) => {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
 
    Product_album.findById(productId, function(err, product_album) {
        if (err) {
            return res.redirect('/album');
        }
        cart.add(product_album, product_album.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/album');
    });
 });

 router.get('/add-to-cart-album-admin/:id', (req, res, next) => {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
 
    Product_album.findById(productId, function(err, product_album) {
        if (err) {
            return res.redirect('/albumadmin');
        }
        cart.add(product_album, product_album.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/albumadmin');
    });
 });
 

 router.get('/add-to-cart-officialmerch/:id', (req, res, next) => {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
 
    Product_officialmerch.findById(productId, function(err, product_officialmerch) {
        if (err) {
            return res.redirect('/officialmerch');
        }
        cart.add(product_officialmerch, product_officialmerch.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/officialmerch');
    });
 });

 router.get('/add-to-cart-officialmerch-admin/:id', (req, res, next) => {
    const productId = req.params.id;
    const cart = new Cart(req.session.cart ? req.session.cart : {});
 
    Product_officialmerch.findById(productId, function(err, product_officialmerch) {
        if (err) {
            return res.redirect('/officialmerchadmin');
        }
        cart.add(product_officialmerch, product_officialmerch.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/officialmerchadmin');
    });
 });

// wishlist
router.get('/add-to-wish-album/:id', (req, res) => {
    const productId = req.params.id;
    const wish = new Wish(req.session.wish ? req.session.wish : {});
 
    Product_album.findById(productId, function(err, product_album) {
        if (err) {
            return res.redirect('/album');
        }
        wish.add(product_album, product_album.id);
        req.session.wish = wish;
        console.log(req.session.wish);
        res.redirect('/album');
    });
});

router.get('/add-to-wish-album-admin/:id', (req, res) => {
    const productId = req.params.id;
    const wish = new Wish(req.session.wish ? req.session.wish : {});
 
    Product_album.findById(productId, function(err, product_album) {
        if (err) {
            return res.redirect('/albumadmin');
        }
        wish.add(product_album, product_album.id);
        req.session.wish = wish;
        console.log(req.session.wish);
        res.redirect('/albumadmin');
    });
});

router.get('/add-to-wish-officialmerch-admin/:id', (req, res) => {
    const productId = req.params.id;
    const wish = new Wish(req.session.wish ? req.session.wish : {});
 
    Product_officialmerch.findById(productId, function(err, product_officialmerch) {
        if (err) {
            return res.redirect('/officialmerchadmin');
        }
        wish.add(product_officialmerch, product_officialmerch.id);
        req.session.wish = wish;
        console.log(req.session.wish);
        res.redirect('/officialmerchadmin');
    });
 });

 router.get('/add-to-wish-officialmerch/:id', (req, res) => {
    const productId = req.params.id;
    const wish = new Wish(req.session.wish ? req.session.wish : {});
 
    Product_officialmerch.findById(productId, function(err, product_officialmerch) {
        if (err) {
            return res.redirect('/officialmerch');
        }
        wish.add(product_officialmerch, product_officialmerch.id);
        req.session.wish = wish;
        console.log(req.session.wish);
        res.redirect('/officialmerch');
    });
 });

module.exports = router;