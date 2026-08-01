## Question 1
JavaScript executes synchronous code in which order?

A. Random order based on memory usage  
B. Line by line in order  
C. In reverse order  
D. Based on callback priority  

## Question 2
What is true about `setTimeout(fn, 0)`?

A. It runs `fn` immediately before all sync code  
B. It blocks the call stack for 0 ms  
C. It queues `fn` to run after the call stack is empty  
D. It guarantees execution at exactly 0 ms  


## Question 3
In this flow, what prints first?
`console.log('Start'); setTimeout(...); console.log('End');`

A. In Between  
B. End  
C. Start  
D. Timer ID


## Question 4
The delay value in `setTimeout(fn, 1000)` represents:

A. Exact execution time after 1000 ms  
B. Minimum wait time before callback is eligible  
C. Maximum wait time  
D. CPU lock duration  


What is a callback?

A. A function passed into another function to run later  
B. A synchronous loop construct  
C. A type of Promise state  
D. A built-in event loop API  



When a callback is passed to an async function, it is usually executed:

A. Before the async task starts  
B. After the async task finishes  
C. During parsing  
D. Only if code is synchronous  





Can a callback be called multiple times?

A. No, JavaScript prevents it at runtime  
B. Yes, if function logic invokes it multiple times  
C. Only in strict mode  
D. Only in browser JavaScript  





What is a major risk of calling callbacks multiple times?

A. Faster memory allocation  
B. Duplicate side effects (e.g., multiple DB writes)  
C. Automatic Promise rejection  
D. Guaranteed deadlock  




What best describes callback hell?

A. Flat and readable async structure  
B. Deeply nested callbacks that reduce readability and control  
C. Using `Promise.all` with many APIs  
D. Calling one synchronous function many times  





Which Promise state is valid?

A. WAITING  
B. BLOCKED  
C. FULFILLED  
D. EXECUTED  




What does a Promise represent?

A. A guaranteed immediate value  
B. A value that may be available now, later, or never  
C. A callback that always runs twice  
D. A synchronous operation wrapper only  



What does `.then()` handle?

A. Rejected promise values only  
B. Resolved (fulfilled) promise values  
C. Syntax errors only  
D. Event loop scheduling only  





What is true about multiple `resolve()` calls inside the same Promise executor?

A. All resolve values are emitted  
B. The last resolve wins  
C. Only the first settlement is used   
D. Promise becomes pending again  





What does `Promise.all([...])` return immediately?

A. An array of final values  
B. A single Promise  
C. A callback function  
D. The first fulfilled value  



`Promise.all` behavior when one Promise rejects:

A. Ignores rejection and continues  
B. Resolves with partial success values  
C. Rejects immediately (fail-fast)  
D. Converts rejection to fulfillment  


What does `Promise.allSettled()` provide?

A. Only fulfilled values  
B. First settled value only  
C. Status/result for all input promises  
D. Only rejected reasons  






What does `Promise.any()` resolve with?

A. First settled promise (fulfilled or rejected)  
B. First fulfilled promise  
C. Array of all fulfilled values  
D. Last fulfilled promise  




What is correct about `async`/`await`?

A. `async` functions always return a Promise  
B. `await` can only be used in non-async functions  
C. `await` turns JavaScript into multi-threaded execution  
D. `await` blocks the entire Node.js thread  





Inside an `async` function, what does `await promise` return when the promise is fulfilled?

A. The Promise object itself  
B. The fulfilled value  
C. A callback function  
D. `undefined` always  



What is the recommended way to handle errors with `async`/`await`?

A. `switch/case` around `await`  
B. Nested callbacks only  
C. `try/catch` blocks  
D. `setTimeout` retries by default 



Which statement about sequential `await` calls is correct?

A. They run in parallel automatically  
B. They run one after another in written order  
C. They become synchronous and block Node.js thread  
D. They are invalid in JavaScript  




If tasks are independent and you want concurrency, what is better than awaiting each one sequentially?

A. Wrapping each task in `console.log`  
B. Using `Promise.all([...])`  
C. Replacing all awaits with callbacks  
D. Using `Promise.race` for all cases  
