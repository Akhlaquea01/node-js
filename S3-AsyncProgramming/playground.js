// Async Await
// Syntactical Sugar over promises
const asyncFunction1 = () => {
    const response = new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Async Function 1");            
            resolve();
        }, 1000);
    })
    
    return response;
};


const asyncFunction2 = () => {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
            console.log("Async Function 2");            
            resolve("Error occured in AF2");
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

const main = async () => {
    let response; 
    
    setInterval(() => {
        console.log("Hello there");
    }, 10)


    await asyncFunction1();
    console.log("AF1 executed")
    await asyncFunction2();
    console.log("AF2 executed")
    await asyncFunction3();
    console.log("AF3 executed")

    // asyncFunction1()
    //     .then(() => {
    //         console.log("AF1 executed");
    //         asyncFunction2().then(() => {
    //             console.log("AF2 executed");
    //             asyncFunction3().then(() => {
    //                 console.log("AF3 executed");
    //             })
    //         })
    //     })
}

await main()