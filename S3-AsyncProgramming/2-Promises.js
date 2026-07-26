const asyncFunction1 = (cb) => {        // Save the order
    setTimeout(() => {
        console.log("Async Function 1");            
        cb();
    }, 1000);
};

const asyncFunction2 = (cb) => {       // Send and Email
    setTimeout(() => {
        console.log("Async Function 2");
        cb();
    }, 1000);
};

const asyncFunction3 = (cb) => {        // Send an SMS
    setTimeout(() => {
        console.log("Async Function 3");
        cb();
    }, 1000);
};


// const cb1 = () => {
//         asyncFunction2(() => {
//             asyncFunction3(() => {
//                 console.log("End");
//             });
//         })};

// Callback Hell / Pyramid of Doom
const main =  () => {
    console.log("Start");
    asyncFunction1(() => {
        asyncFunction2(() => {
            asyncFunction3(() => {
                console.log("End");
            });
        });
    });a
};

const f3 = () => {
    console.log("End");
}

const f2 = () => {
    
    asyncFunction3();
}

const f1 = () => {
    asyncFunction2(f2);
}


const main =  () => {
    console.log("Start");
    asyncFunction1(f1);
};





/* Why Prommises
    - Clean and maintainable async code
    - Avoids callback hell
*/

// DB
const asyncFunction  =  () => {
    const response = new Promise((resolve, reject) => {
        setTimeout(() => {     
            console.log('In between');
            // reject();

            resolve();
            resolve();
            resolve();
            resolve();
        }, 1000);
    });

    return response;
};

const cb = () => {
    console.log("End");    
}

// Program (creation of order)
const main = () => {
    console.log("Start");
    const resp = asyncFunction()
                .then(() => {
                    // console.log(resp);
                    cb();
                })
                .catch(() => {
                    // console.log(resp);

                    console.log("Error");
                }).finally(() => {
                    // console.log(resp)
                })   
                    console.log(resp);

    
    
    setInterval(() => {
        console.log(resp);
    }, 10)
}

main();