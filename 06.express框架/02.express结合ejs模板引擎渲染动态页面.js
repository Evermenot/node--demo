const express = require('express');
const path = require('path');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views')

server.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, './views/index2.html'));
    /**
     * sendFile()只能提供静态文件，无法渲染动态页面
     * res.render() express框架独有，参数：
     *    参数一：要渲染的页面名称
     *    参数二：要渲染的数据对象
     * 注：默认情况下，我们无法直接使用res.render函数来渲染动态页面，
     *    因为express并没有为提供默认的模板引擎；
     * 解决：
     *    在调用res.render()前，要先指定使用哪个模板引擎来渲染页面
     */

    res.render('index2', {name: 'li', age: 12})
});
server.listen('3000', _ => {
    console.log('http://127.0.0.1:3000');
});


/**
 * 配置模板引擎：
 *  1.安装合适的模板引擎 如：ejs
 * 
 *  2.配置模板引擎 
 *    server.set('view engine', 'ejs')
 * 
 *  3.配置模板页面的存放路径
 *    server.set('views', './views/index2.html')
 *    参数一：固定写法--字符串
 *    参数二：模板页面的存放（目录）的路径
 */