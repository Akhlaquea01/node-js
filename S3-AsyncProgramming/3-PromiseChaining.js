const asyncFunction1 = () => {
    const response = new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Async Function 1");            
            reject();
        }, 1000);
    })
    
    return response;
};


const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Async Function 2");            
            reject("Error occured in AF2");
        }, 1000);
    })
};

const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Async Function 3");            
            resolve();
        }, 1000);
    })
};

// const cb1 = () => {
//         asyncFunction2(() => {
//             asyncFunction3(() => {
//                 console.log("End");
//             });
//         })};

// Callback Hell / Pyramid of Doom
// const main =  () => {
//     console.log("Start");
//     asyncFunction1(() => {
//         asyncFunction2(() => {
//             asyncFunction3(() => {
//                 console.log("End");
//             });
//         });
//     });
// };

// const main =  () => {
//     console.log("Start");
    
//     asyncFunction1().then(() => {
//         asyncFunction2().then(() => {
//             asyncFunction3().then(() => {
//                 console.log("All Done");
//             })
//         });
//     })
// };


// Promise Chaining

const main =  () => {
    console.log("Start");
    
    asyncFunction1()
        .catch((err) => console.log(err))
        .then(asyncFunction2)
        .catch((err) => console.log(err))
        .then(asyncFunction3)
        .catch((err) => console.log(err))
        .then(() => console.log("All Done"))
        .catch((err) => console.log(err))
        .finally(() => {
            console.log("Here comes finally");
        })
};

main()