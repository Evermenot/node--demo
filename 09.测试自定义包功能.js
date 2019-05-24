/** 包导入规则：
 * 1.当我们导入一个包的时候，会先在包的根目录中，查找一个加做`package.json`的文件
 * 2.如果有`package.json`文件，则会继续查找该文件中是否存在`main`属性
 * 3.如果有`main`属性，则会尝试加载main属性所指向的文件
 * 4.如果这个文件加载（require）成功，则可以开始使用
*/
const calc = require('./自定义包');
console.log(calc.add(2,3));



/**
 * 测试测试测试测试git命令
 */