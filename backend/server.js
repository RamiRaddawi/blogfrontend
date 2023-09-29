const express = require('express');
const cors = require('cors');
require("./config/connect");

const articleApi = require('./routes/article');
const authorApi = require('./routes/author');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/article',articleApi);
app.use('/author',authorApi);
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.listen(3000,()=>{
    console.log("server worked in port 3000 ...");
   
});