const fs = require('fs');

fs.readFile('./files/1.txt', (err, data) => {
    if(err) return console.log(err.message);
    let dataStr = data + '-- 这是1.txt文件的内容'
    fs.writeFile('./files/copy.txt', dataStr, err => {
        if(err) return err.message;
        console.log('读取写入操作成功')
    })
});