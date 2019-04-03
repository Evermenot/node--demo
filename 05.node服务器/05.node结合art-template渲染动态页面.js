//1.导入http模块
const http = require('http');
const template = require('art-template')
const path = require('path')
//2.创建服务器模块
const server = http.createServer();
//3.绑定事件
server.on('request', (req, res) => {
    const person = {
        name: 'leon',
        age: 18,
        gender: 'man',
        hobby: ['吃饭', '睡觉', '打豆豆']
    };
    const htmlStr = template(path.join(__dirname, '../01.files/template.html'), person)
    res.end(htmlStr);
});

//4.启动服务器
server.listen(3000, _ => {
    console.log('服务启动');
});

/**
 * 模板引擎使用过程
 * 1.引入模板引擎 <script src='art-template.js'></script>
 * 2.创建模板标签<script id='tmpl' type='text/template'></script>
 * 3.const htmlStr = template('tmpl', {要渲染的数据对象})
 *   Node服务器端 template函数的第一个参数是要渲染的html文件地址
 */