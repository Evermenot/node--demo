const fs = require('fs');
let path = require('path');
// fs.stat(path[, options], callback)

fs.stat(path.join(__dirname, './files/1.txt'), (err, stats) => {
    if(err) return console.log(err);
    console.log('文件信息', stats)
    console.log(stats.isFile())
})