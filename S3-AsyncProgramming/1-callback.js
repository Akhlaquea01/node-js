// DB
const asyncFunction  =  (cb) => {
    setTimeout(() => {     
        console.log('In between');
        cb();
        cb();
        cb();
        cb();

    }, 1000)
};

const cb = () => {
    console.log("End");    
}

// Program (creation of order)
const main = () => {
    console.log("Start");
    asyncFunction(cb);    
}


main();