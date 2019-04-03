const path = require('path');
const fs = require('fs');
// 1.导入模块
const http = require('http');
// 2.创建服务器
const server = http.createServer();
// 3.为服务器绑定方法
server.on('request', (req, res) => {

    const url = req.url;
    const method = req.method.toLowerCase() ;
    // console.log(url, method)
    if(url === '/index.html' && method === 'get') {
        fs.readFile(path.join(__dirname, '../01.files/index.html'), (err, data) => {
            res.end(data);
        });
    }
});

//4.最后启动服务
server.listen('8080', _ => {
    console.log('启动服务');
});