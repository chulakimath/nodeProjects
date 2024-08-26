const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const routerfile=require("./routes/routes.js");



// middlewares
// for using json data from request
app.use(express.json());

// for using form data from request
app.use(express.urlencoded({extended:false}))

// for the routes /api/*
app.use("/api",routerfile);


app.listen(3000, () => {
    console.log("http://localhost:3000")
})






mongoose.connect("mongodb+srv://santoshchulakimath222:B6AEmoSARXk0PYvE@backend.ymkdjji.mongodb.net/Node-api?retryWrites=true&w=majority&appName=backend").then(() => {
    console.log('Connected');
}).catch(() => {
    console.log("db connection falied");
})