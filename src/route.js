const { Router } = require('express')
const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))  

module.exports = route