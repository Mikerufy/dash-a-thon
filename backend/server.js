const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

require("dotenv").config();

const app = express();
const port =5000;

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://admin:naruto@cluster0.f8ssc.mongodb.net/vyaapaar?retryWrites=true&w=majority'
mongoose.connect(uri,{useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open' , ()=>{
    console.log('Mongo connected');
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
