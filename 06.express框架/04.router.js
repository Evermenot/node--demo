const express = require('express');
/**
 * 后端路由：
 *  前端和后台服务器之前，通过url地址进行数据交换
 *  这种URL地址到处理函数之间的对应关系，就叫做后端路由
 *  如：输入的每个地址，必然对应一个 后端的 处理函数
 */
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index2.ejs', {
        name: 'lili',
        age: 1212
    });
});

router.get('/route', (req, res) => {
    res.render('route.ejs', {
        name: '路由',
        age: '无'
    });
});

module.exports = router;
