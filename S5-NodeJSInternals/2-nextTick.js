// Example 1: 

// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// Promise.resolve().then(() => {
//     console.log("Promise Callback");   
// })

// console.log("Main script");

// process.nextTick(() => console.log('process.nextTick'));



// Example 2:
// setTimeout(() => {
//     console.log("Main Timer")
// }, 0)


// process.nextTick(() => console.log('process.nextTick 1'));

// Promise.resolve().then(() => {
//     console.log("Promise Callback 1");   

// })


// process.nextTick(() => console.log('process.nextTick 2'));

// Promise.resolve().then(() => {
//     console.log("Promise Callback 2");   

// })

// console.log("Main script");



// Example 3
setTimeout(() => {
    Promise.resolve().then(() => {
        console.log("Resolved inner promise");
        process.nextTick(() => console.log('process.nextTick 1'));
   
    })
}, 0)

setTimeout(() => {
    console.log("Main Timer")
}, 0)


console.log("Main script");