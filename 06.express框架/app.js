const path = require('path');
//1.导入express模块
const express = require('express');
//2.创建服务器
app = express();
//3.监听请求
app.all('/', (req, res) => {
    res.send('啦啦啦啦');
});
app.get('/index.html', (req, res) => {
    /**
     * sendFile适合返回少量的静态资源文件
     * res.sendFile方法内部的实现原理，也是通过NodeJS的文件系统模块fs的readFile()
     * 来读取文件 readFile(path[, option], (err, data) => { res.end(data) });
     */
    res.sendFile(path.join(__dirname, '../01.files/index.html'));
});
//4.启动服务器
const server = app.listen(3000, _ => {
    console.log('express server running at http://127.0.0.1');
});

/**
 * app.get 监听get请求
 * app.post 监听post请求
 * app.all 监听所有请求
 */