const a = 'm1文件变量a';

// 在模块中，可以把要暴露出去的成员挂载到exports对象上
// exports默认是一个空对象
// module.exports.a = a;
module.exports = { a, b: 2233 };
exports.a = a
// module可以省略
// module.exports 和 exports 都可以向外暴露成员
console.log(exports, module.exports)

// 在一个模块中，默认module.exports 和 exports指向同一个对象
// 模块向外暴露成员时，require永远以module.exports指向对象为准