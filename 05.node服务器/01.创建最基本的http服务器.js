//1.导入Node中提供的核心模块http
const http = require('http');

//2.创建服务器
const server = http.createServer();

//3.为server服务器，通过 on方法 绑定一个事件
server.on('request', (req, res) => { // 发送请求即触发
    console.log('ok');
    res.end('响应的数据');

    // 注：每次请求完，需要调用下response对象的end方法来结束响应，并向客户端传送数据
});

//4.启动服务器
/**listen(port[, Ip],callback)
 * port：端口号
 * Ip：可选，默认监听127.0.0.1
 * callback：服务器正常启动时触发
*/
server.listen(8089, '127.0.0.1', _ => {
    console.log('服务已启动');
});