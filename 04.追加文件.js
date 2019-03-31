const fs = require('fs');
// fs.appendFile(path, data[, options], callback)

let str = '\n这是追加的数据';
fs.appendFile('./files/2.txt', str, err => {
    if(err) return console.log(err.message);
    console.log('追加成功');
});