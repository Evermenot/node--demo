console.log('使用node命令运行指定的JS文件')

// require导入文件系统模块，相当于PHP中的include载入资源模块
const fs = require('fs');

// node读取文件
// readFile(path[, options], callback)
// options: 表示可选参数，字符编码如：'utf8'
// callback: 回调会传入两个参数 (err, data)，其中 data 是文件的内容。
fs.readFile('./1Q84-村上春树.pdf', (err, data) => {
    if(err) return console.log(err.message);
    // Buffer 是一种类型，表示二进制的意思
    // console.log(data, data + '')
    // console.log(data instanceof Buffer)
    console.log(data + '')
});