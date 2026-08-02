// Example 1: Event Loop, a function is executed only when it is on callstack

// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)

// console.log("Main script");

// for (let i= 0; i< 1000000; i++) {
//     console.log(i);
// }


// Example 2
// Promise.resolve() ==> Creates a resolved promise immediately.

// Promise.resolve().then(() => {
//     console.log("Promise Callback");   
// })

// console.log("Main script");


// Example 3: mIcroTaskQueue (Promises) and mAcroTaskQueue (Timer)

// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// Promise.resolve().then(() => {
//     console.log("Promise Callback");   
// })

// console.log("Main script");


// Example 4: 

// for (let i=0; i< 10; i++) {
//     setTimeout(() => {
//         console.log(`Main Timer ${i}`)
//     }, 0)


//     Promise.resolve().then(() => {
//         console.log(`Promise Callback ${i}`);   
//     });
// }

// console.log('MS');


// Example 5

// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// Promise.resolve().then(() => {
//     console.log("Promise Callback");   
//     Promise.resolve().then(() => {
//         console.log("Resolved inner promise");   
//     })
// })

// console.log("Main script");


// Example 6: 

setTimeout(() => {
    console.log("Outer Timer")
    Promise.resolve().then(() => {
        console.log("Inner promise");   
    })

}, 0)    


Promise.resolve().then(() => {
    console.log("Outer Promise");   
    setTimeout(() => {
        console.log("Inner Timer")
    }, 0)    
})

console.log("Main script");

