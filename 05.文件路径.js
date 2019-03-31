const fs = require('fs');

console.log(__dirname); // G:\node--demo
console.log(__filename); // G:\node--demo\05.文件路径.js
// 推荐使用上面的__dirname 拼接出一个绝对路径

let str = '\n这是追加的数据';
// let pathStr = __dirname + '/files/2.txt'
// G:\node--demo/files/2.txt  // 路径片段分隔符 很怪异，虽然也识别
// 下面的方法可以解决
// 导入path 模块
let path = require('path');
let pathStr = path.join(__dirname, '/files/2.txt');

fs.appendFile(pathStr, str, err => {
    if(err) return console.log(err.message);
    console.log('追加成功');
});