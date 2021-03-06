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

home.post('/register', (req, res) => {
    let { name, pass, email } = req.body;
    if (name.trim().length == 0) {
        res.send({ error: 100, message: '请填写用户名' });
        return;
    }
    let sql1 = 'select * from users where name =?'
    connect.query(sql1, [name], (err, rows) => {
        if (rows.length == 0) {

            let sql2 = 'insert into users set ?';

            res.body.pass = md5(pass);

            connect.query(sql2, res.body, err => {
                if (err == null) {
                    res.send({ success: true, message: '注册成功' })
                } else {
                    res.send({ error: 400, message: '注册失败' })
                }
            })

        } else {
            res.send({ error: 300, message: '用户名已经被注册' });
        }
    })
})

home.post('/login', (req, res) => {
    let { eamil, pass } = req.body;
    let sql3 = 'select * from users where email =?'
    connect.query(sql3, email, (err, rows) => {
        if (rows.length == 0) {
            res.send({ error: 400, message: '用户名不存在' });
        } else {
            if (md5(pass) == rows[0].pass) {
                req.session.isLogin = true;
                res.send({ success: true, message: '登录成功' })

            } else {
                res.send({ error: 300, messqge: '用户名或密码错误' })
            }
        }
    })

})









module.exports = home;