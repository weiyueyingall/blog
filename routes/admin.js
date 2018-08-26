const express = require('express');
const connect = require('../modle/db.js')
const admin = express.Router();

admin.get('/index', (req, res) => {
    res.render('admin/index', {
        layout: 'admin'
    });
})

// 添加文章
admin.get('/add', (req, res) => {
    res.render('admin/add', {
        layout: 'admin'
    })
})

admin.get('/list', (req, res) => {
    res.render('admin/list', {
        layout: 'admin'
    })
})

module.exports = admin;