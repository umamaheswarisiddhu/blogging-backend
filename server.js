const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postsRoutes');
require('./connection')
require('dotenv').config();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));

app.use('/users',userRoutes);
app.use('/posts',postRoutes);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port,()=>{
    console.log(`Server is running on port ${port}!`)
});