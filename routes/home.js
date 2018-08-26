const express = require('express');

const connect = require('../modle/db.js')

const home = express.Router()
    //当客户端以get请求时的响应

home.get('/index', (req, res) => {
    res.render('home/index');
})

home.get('/about', (req, res) => {
    res.render('home/about');
})
home.get('/join', (req, res) => {
    res.render('home/join');
})

module.exports = home;