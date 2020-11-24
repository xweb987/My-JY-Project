//导入
const http = require('http');
const path = require('path')
const fs = require('fs')
//createServer
const server = http.createServer();
//监听
server.on('request', (req, res) => {
    let pathname = req.url;
    pathname = pathname === '/' ? '/index.html' : pathname;
    fs.readFile('D:\three\week1_20201124\code', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('i am 404');
        } else {
            res.end(data);
        }
    })
})

//启动
server.listen(8080, () => {
    console.log('server is running at http://127.0.0.1:8080');
})