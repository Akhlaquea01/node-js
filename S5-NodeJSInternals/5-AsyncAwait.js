// const internalCall = async () => {
//     console.log("Internal log");
// }


// const main = async () => {
//     setTimeout(() => {
//         console.log('Log from timer');
//     }, 0);
    
//     Promise.resolve().then(() => {
//         console.log("Hello there");
//     })
//     await internalCall();
//     console.log("This is the end");
// }

// main();


// // const main = async () => {
// //     setTimeout(() => {
// //         console.log('Log from timer');
// //     }, 0);
    
// //     Promise.resolve().then(() => {
// //         console.log("Hello there");
// //     })
// //     internalCall().then(() => {
// //         console.log("This is the end");
// //     });
// // }

// main();


setTimeout(() => console.log("A"), 0);  // T1

Promise.resolve()
.then(() => {   // P1
    console.log("B");
    return new Promise(resolve => {
        setTimeout(() => {  // T2
            console.log("C");
            resolve();
        }, 0)
    });
})
.then(() => { // P2
    console.log("D");
});


(async () => {  // F1
    console.log("E");
    await null;
    console.log("F"); 
})();

console.log("G");


