/**
 * Promise构造函数，接受一个函数作为参数，该函数是同步的并且会被立即执行（起始函数）
 * 起始函数包含2个参数：resolve, reject。分别表示成功和失败的状态
 * setTimeout是异步处理
 * resolve()成功时执行，抛出括号内的东西
 * reject()失败时执行
 * then默认向下执行，可以用throw跳转至catch来中断
 * 
 * await让异步代码有了同步的风格
 * await指令后必须跟一个Promise，异步函数会在这个Promise运行中暂停，直到其运行结束再继续运行
 * 处理异常的机制将用try-catch块实现
 * await必须在async里使用
 * 
 * promise.all([promise1, promise2, ...])
 * 用于接收所有promise后再执行，可以让不同promise并发执行
 */

function print(delay: number, message: string) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message);
            resolve("success");
        }, delay);
    });
}

// print(1000, "first").then((message) => {
//     console.log(message);
//     return print(2000, "second");
// }).then((message) => {
//     console.log(message);
//     return print(3000, "third");
// });

async function asyncPrint() {
    await print(1000, "first");
    await print(2000, "second");
    await print(3000, "third");
    await print(4000, "fourth");
}

asyncPrint();

