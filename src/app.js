const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
app.listen(process.env.port | 8000);

const pathStatic = path.join(__dirname, '../public');
const pathTemplates = path.join(__dirname, '../templates/views');
const pathPartials = path.join(__dirname, '../templates/partials');


/** TEMPLATE ENGINE : HBS
 ******************************************************/
app.use(express.static(pathStatic));
app.set('views', pathTemplates);

hbs.registerPartials(pathPartials);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index', {
    userName : 'RANA'
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('*', (req, res) => {
  res.render('404')
})


/** STATIC SITE
******************************************************/
/*
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.get('/about', function (req, res) {
  res.send('Hello World About page')
})

 */