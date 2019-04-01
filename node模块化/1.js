console.log('模块1')
const a = '模块1中的a'
/**
 * node.js实现了CommonJS模块化规范
 * 如果没有模块化node就不能使用其他系统模块成员的方法
 * 
 * 什么是CommonJS规范：
 *  CommonJS是为了实现JavaScript的模块化，而定制的一套规范
 *  定义了：
 *    一个js模块如何引入其他js模块
 *    一个js模块如何向外暴露一些成员，供其他模块调用 
 * 
 *  nodeJS中模块中的变量都是 私有 的，不会挂载到全局的global对象上
 */
/**
 * 使用global向外暴露成员，会造成全局污染
 * 推荐使用CommonJS规范实现NodeJS模块化机制
 * 使用exports对象挂载要暴露的变量
 * 使用require导入模块
 */
global.a = a;