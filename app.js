const express = require('express');
const app = express();

//当客户端以get请求时的响应
app.get('/', (req, res) => {
    res.send('hollo blog');
})



app.listen(3000, (err) => {
    if (!err) {
        console.log('服务器启动成功,请访问http://localhost:3000端口')
    }
});