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
        /**
         * url只是资源路径 `标识符`，url不一定非要对应实际的物理磁盘路径
         * 因此在引用资源时，推荐使用绝对路径
         * <link rel="stylesheet" href="/style.css">
         * path.join(__dirname, '/assets/style.css')
         */
        fs.readFile(path.join(__dirname, '../01.files/index.html'), (err, data) => {
            res.end(data);
        });
    }
});

//4.最后启动服务
server.listen('8080', _ => {
    console.log('启动服务');
});