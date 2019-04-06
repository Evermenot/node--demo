const express = require('express');
const server = express();
server.set('view engine', 'ejs');
server.set('views', './views')

const router = require('./04.router.js');
// 将路由对象注册到服务器上
server.use(router);

server.listen(3000, _ => {
    console.log('http:// 127.0.0.1:3000');
});

/**
 * 路由基本使用
 * 1.封装单独的router.js路由模块文件
 * 
 * 创建路由对象
 * const router = express.Router();
 * router.get('index' (req,res) => {})
 * 
 * 导出路由
 * module.exports = router
 * 
 * 挂载路由模块
 * serve.use(router)
 */