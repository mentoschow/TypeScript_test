"use strict";
/**
 * Promise构造函数，接受一个函数作为参数，该函数是同步的并且会被立即执行（起始函数）
 * 起始函数包含2个参数：resolve, reject。分别表示成功和失败的状态
 * setTimeout是异步处理
 * resolve()成功时执行，抛出括号内的东西
 * reject()失败时执行
 */
let MyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let x = Math.random();
        console.log(x);
        if (x < 0.5) {
            resolve("success");
        }
        else {
            reject("error");
        }
        console.log(MyPromise);
    }, 2000);
    console.log("2.");
});
console.log("1.");
