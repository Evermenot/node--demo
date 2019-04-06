const express = require('express');

//创建服务
const app = express();
app.use(express.static('./views'));
app.use(express.static('./statics'));

/**
 * express.static是一个express的内置中间件；
 * app.use()方法，是专门用来注册中间件的；
 * 
 * 使用express.static()托管的静态资源文件目录，
 * 被托管的静态资源文件目录不应该出现在资源访问的URL地址中；
 * 解决：
 *  app.use('/statics', express.static('./statics'));
 *  在use第一个参数位置手动挂载静态资源路径
 */

//启动服务
app.listen('3000', _ => {
    console.log('App listening on port 3000');
});