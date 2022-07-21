const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.mlpu8.mongodb.net/blogsecond?retryWrites=true&w=majority`,()=>{
    console.log('Connected to DB successfully');
})