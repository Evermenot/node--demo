//1.导入http模块
const http = require('http');

//2.创建服务器
const server = http.createServer();

//3.为server服务器绑定事件
server.on('request', (req, res) => { 
    console.log('ok');
    /**
     * res.writeHeader
     * 参数一：状态码 200 300重定向 400资源访问不到 500服务器内部错误
     * 参数二：配置对象
     */
    res.writeHeader(200, {
        "Content-Type": 'text/html;charset=utf-8'
        /**含义：
         * Content-Type内容类型：文本类型下html数据，以utf-8的格式解析
         * 如：text/css text/plain image/png
         */
    })
    res.end('请求的地址：' + req.url);

    /** 璇锋眰鐨勫湴鍧€锛� 需要指定返回内容的编码格式
     *  指定编码格式：
     *      在调用res.end之前，通过 res.writeHeader()来指定编码格式;
    */
});

//4.启动服务器
server.listen(8089, '127.0.0.1', _ => {
    console.log('服务已启动');
});