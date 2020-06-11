const path = require('path')
const knex = require('../../database/connection')
const express = require('express')
const market = express.Router()
const cors = require('cors')

module.exports = {
  async index(req, res){
    const busca = await knex('products');
    return res.send(busca)
  }
}