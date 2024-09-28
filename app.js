const express = require('express');
const app = express();
require('dotenv/config')
const api = process.env.API_URL;
const morgan = require('morgan')
const mongoose = require('mongoose');

const 
// constants
username = encodeURIComponent(process.env.DB_NAME)
pass = encodeURIComponent(process.env.PASSWORD)  

// Middleware @depricated bodyparser

app.use(express.json());

// format logs u can use many 
app.use(morgan('tiny'));

app.use(`${api}/products`, productsRouter)
const Product = require('./models/product')



let url = `mongodb+srv://${username}:${pass}@hemantcluster.uy0dc.mongodb.net/eshop-database?retryWrites=true&w=majority&appName=hemantcluster`
mongoose.connect(url,{
    dbName: 'eshop-database'
}).then(() => {
    console.log('Database Connection is ready ..')
}).catch(err => {
    console.error(err)
})

app.listen(3000, ()=> {
    console.log('server is running http://localhost:3000')
})