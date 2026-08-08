/*
1. Timers Phase: setTimeout & setInterval, any callbacks originating from the timers
2. Pending Callback Phase: 
    TCP errors, DNS errors, deferred network callbacks (Low level system errors)
3. Idle / Prepare phase =>  Internally used by the system to maintain event loop phases. Not generally used by developers
4. Poll Phase: 
    - All new i/O events and related callbacks like DB Calls, FS call, socket call
5. Check phase: 
    - for setImmediate callbacks
6. Close phase
    - Socket handling
    - cleanup like closing database
*/

// Example 1:
// const fs = require('fs');

// fs.writeFile('temp.txt', 'Hello', (err) => {            // Phase 4: Poll Phase
//   if (err) throw err;

//   const stream = fs.createReadStream('temp.txt');

//   stream.on('close', () => {                            // Phase 6: Close Phase
//     console.log('Log from close callback (Phase 6)');
//   });

//   setTimeout(() => {                                    // Phase 1: Timer          
//     console.log('Log from timer');
//   }, 0);

//   stream.destroy();
// });


// console.log("Main Script");           


// Example 2: 
    setTimeout(() => {
        console.log("SetTimeOut inside I/O");
    }, 0);

    setImmediate(() => {
        console.log("setImmediate inside I/O");
    });

// Example 3: 
const fs = require('fs');

fs.readFile('./temp.text', () => {
    setTimeout(() => {
        console.log("SetTimeOut inside I/O");
    });

    setImmediate(() => {
        console.log("setImmediate inside I/O");
    })
});




