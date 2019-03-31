const fs = require('fs');
let path = require('path');
// 读取目录，并得到目录下所有的文件和文件加名称
let strInfo = '', count = 0
fs.readdir(__dirname, (err, fileNames) => {
    console.log(fileNames)
    fileNames.forEach(item => {
        let absPath = path.join(__dirname, item)
        // console.log(absPath)
        fs.stat(absPath, (err, stats) => {
            // stat为异步方法
            if(err) return console.log(err);
            const infoStr = `文件名： ${item}
                文件大小： ${stats.size}
                是否为文件： ${stats.isFile()}
                ----------------`;
            // console.log(infoStr)
            strInfo += infoStr;
            count++;
            if(count === fileNames.length) {
                console.log(strInfo)
            }
        })
    })
    // console.log(strInfo) // 空
})