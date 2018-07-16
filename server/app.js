const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express()

//view engin setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//I think i need to app.use to connct to front end here I jsut don't think i know how

//add body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(9000, () => {
    console.log('This server is runnign on port 9000...')
})