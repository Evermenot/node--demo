let fs = require('fs')
// fs.writeFile(path, data[, options], callback)
// path: 文件路径
// data: 要写入的数据
// options: 可选的 编码格式，默认utf-8
// callback: 文件写入完成的回调函数

fs.writeFile('./files/2.txt', '写入数据', err => {
    if(err) return err.message;
    console.log('写入成功')
})