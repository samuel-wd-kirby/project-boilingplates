/// File Imports
const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const server = express()
const fs = require('fs')
const lib = require('./lib')


/// Middleware
server.use(express.static(path.join(__dirname, '/public')))
server.use(express.urlencoded({extended:false}))

// Handlebars Configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

/// Routing
server.get('/', (req, res) => {
  res.render('home')
})




module.exports = server