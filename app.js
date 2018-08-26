const express = require('express');

const hdbs = require('express-handlebars');

const path = require('path');

const bodtparser = require('body-parser');

const md5 = require('md5');


const app = express();

app.use(bodtparser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hdbs({
    partialsDir: [{
        dir: path.join(__dirname, 'views', 'home', 'partials'),
        namespace: 'home'
    }, {
        dir: path.join(__dirname, 'views', 'admin', 'partials'),
        namespace: 'admin'
    }],
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'home'


}))



app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'handlebars');

const home = require('./routes/home.js')

app.use('/home', home);

const admin = require('./routes/admin.js');

app.use('/admin', admin);

app.listen(3000, (err) => {
    if (!err) {
        console.log('服务器启动成功,请访问http://localhost:3000端口')
    }
});