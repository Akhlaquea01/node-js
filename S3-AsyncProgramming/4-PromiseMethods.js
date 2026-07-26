const asyncFunction1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("AF 1 Success res1");
            console.log("AF 1 executed")
        }, 100);
    })
};

const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("AF 2 Success");
            console.log("AF 2 executed")
        }, 500);
    })
};

const asyncFunction3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("AF 3 Success");
            console.log("AF 3 executed")
        }, 800);
    })
};

// Promise.all
// const main =  () => {
//     const resp = Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
//     console.log(resp);

//     resp.then(success => {
//         console.log(success);
//     }).catch(error => {
//         console.log(error);
//     })
// };

// main();

// Promise.allSettled
// const main =  () => {
//     const resp = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
//     console.log(resp);

//     resp.then(success => {
//         console.log("Promise.allSettled is successful")
//         console.log(success);
//     }).catch(error => {
//         console.log("Promise.allSettled has errors")
//         console.log(error);
//     })
// };

// main();

// Promise.any --> fastest fulfilled response
// const main =  () => {
//     const resp = Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
//     console.log(resp);

//     resp.then(success => {
//         console.log("Promise.allSettled is successful")
//         console.log(success);
//     }).catch(error => {
//         console.log("Promise.allSettled has errors")
//         console.log(error);
//     })
// };

// main();

// Promise.race --> fastest settled response
const main =  () => {
    const resp = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()]);
    console.log(resp);

    resp.then(success => {
        console.log("Promise.race is successful")
        console.log(success);
    }).catch(error => {
        console.log("Promise.race has errors")
        console.log(error);
    })
};

main();

