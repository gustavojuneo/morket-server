const express = require('express')
const market = express.Router()
const path = require('path')

const ViewController = require('./controllers/ViewController')

market.get('/view', ViewController.index)



module.exports = market;