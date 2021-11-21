const express = require('express')
const User = require('../models/user')
const router = express.Router();

router.get('/signin', (req, res) => {
    res.render('pages/signin')
})

router.get('/register', (req, res) => {
    res.render('pages/register')
})

router.get('/signout', (req, res) => {
    req.session.isLoggedIn = false;
    res.redirect('/');
})

router.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    accounts = await User.find();
    await accounts.forEach((account) => {
        if(email=="admin@admin" && password=="admin"){
            req.session.isLoggedIn = true;
            res.redirect('/admin')
        }

        else{
            if (email == account.email) {
                if (password == account.password) {
                    req.session.isLoggedIn = true;
                    res.redirect('/')
                    next()
                }
                else {
                    res.render('pages/signin', {error: 'Wrong Password!'})
                }
            }
        }
    })
    res.render('pages/signin', {error: 'No email found!'})
})

router.post('/register', async (req, res) => {
    const name = req.body.yourname;
    const email = req.body.email;
    const password = req.body.password;
    const password_ = req.body.repassword;

    accounts =  await User.find();
    await accounts.forEach((account) => {
        if (email == account.email) {
            res.render('pages/register', {error: 'Email already registered!'})
        }
    })
    if (password != password_) {
        res.render('pages/register', {error: 'Unmatched password!'})
    }
    else {
        const user = new User({
            name: name,
            email: email,
            password: password
        });
        await user.save((err, res) => {
            if (err) console.error(err);
            else {
                console.log('Berhasil terdaftar');
            }
        })
        req.session.isLoggedIn = true;
        res.redirect('/');
    }
})

module.exports = router;