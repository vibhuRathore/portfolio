const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views')) 



app.get('/' , (req , res) => {
    res.render('home')
})

app.get('/aboutMe' , (req , res) => {
    res.render('templates/aboutMe')
})

app.get('/projects' , (req , res) => {
    res.render('templates/projects')
})

app.get('/services' , (req , res ) => {
   res.render('templates/services')
})

app.get('/contactMe' , (req , res ) => {
    res.render('templates/contactMe')
 })











 

app.listen(3000, () => {
    console.log( "listening on port 3000");
})