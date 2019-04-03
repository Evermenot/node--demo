/**
 * index.html：首页
 * movie.html：电影
 * about.html：关于
 */

// 1.导入模块
const http = require('http');
// 2.创建服务器
const server = http.createServer();
// 3.为服务器绑定方法
server.on('request', (req, res) => {
    console.log('请求成功'); 
    // 设置数据解析编码
    res.writeHeader(200, {
        'Content-type': 'text/html;charset=utf-8'
    })
    const url = req.url;
    const method = req.method.toLowerCase() ;
    switch (url) {
        case '/index.html': res.end('首页'); break;
        case '/movie.html': res.end('电影'); break;
        case '/about.html': res.end('关于'); break;
        default: res.end('没有该页面');
    }
});

//4.最后启动服务
server.listen('8080', _ => {
    console.log('启动服务');
});