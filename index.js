const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
const mongoose = require('mongoose');

const app = express()

app.use(express.static("public"))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session ({
    secret:'som3_s3cret_keys',
    cookie: {}
}));

app.use( (req, res, next) => {
    res.locals.isLoggedIn = req.session.isLoggedIn;
    next();
});

mongoose.connect(('mongodb+srv://project_uas:projectuasmongodb@cluster0.8vmwj.mongodb.net/projectdearme?retryWrites=true&w=majority'), (err, res) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('Database terhubung');
    }
})


const indexRouter = require('./routes/index');
const wishRouter = require('./routes/wish');
const cartRouter = require('./routes/cart');
const newproductRouter = require('./routes/addnewproduct');
const userRouter = require('./routes/user');
// const deleteitemRouter = require('./routes/delete');

app.use('/', indexRouter);
app.use('/wishlist', wishRouter);
app.use('/cart', cartRouter);
app.use('/add_newproduct', newproductRouter);
app.use('/user', userRouter);

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server sudah berjalan')
    //console.log(__dirname)
})