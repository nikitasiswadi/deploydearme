const express = require('express')

const Wish = require('../models/wish')
const Cart = require('../models/cart')
const Product_album = require('../models/product_album')
const Product_officialmerch = require('../models/product_officialmerch')
const router = express.Router();

router.get('/', async(req, res) => {
    if (!req.session.wish) {
        return res.render('pages/Wishlist', {products: 0});
    }
    var wish = new Wish(req.session.wish);
    console.log(wish);
    res.render('pages/Wishlist', { products: wish.generateArray() });
})

router.get('/remove-w/:id', (req, res, next) => {
    const productId = req.params.id;
    const wish = new Wish(req.session.wish ? req.session.wish : {});
 
    wish.removeItem(productId);
    req.session.wish = wish;
    res.redirect('/wishlist');
});


module.exports = router;