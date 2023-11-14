
const express = require('express');
const mysql = require("mysql");
const dotenv= require('dotenv');
const path = require('path');
const { execPath } = require('process');

dotenv.config({ path: './.env'});

const app = express();

const db = mysql.createConnection({
    host : process.env.DATABASE_HOST,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE


});

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

//parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use('/' , require('./routes/pages'));
app.use('/auth',require('./routes/auth'));

app.set('view engine','hbs');

db.connect((error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("My SQL Conected...")
    }
});
app.get('/',(req,res)=>{
   // res.send('<h1> Home Page </h1>')
   res.render("index");
});

app.get('/register',(req,res)=>{
    // res.send('<h1> Home Page </h1>')
    res.render("register");
 });
 app.get('/login',(req,res)=>{
    // res.send('<h1> Home Page </h1>')
    res.render("login");
 });


 //define routes


app.listen(2610,() => {
    console.log('Server started on Port 2610');
});
