// function wrappedPromise() {
//   return new Promise((resolve) => {
//     console.log("Inside Promise executor");
//     resolve("done");
//   });
// }

// wrappedPromise().then((val) => console.log("Promise then:", val));

// console.log("End of script");



// function wrappedPromise() {
//   return new Promise((resolve) => {
//     console.log("Inside Promise executor");

//     process.nextTick(() => {
//       console.log("process.nextTick inside Promise");
//     });

//     setTimeout(() => {
//       console.log("setTimeout inside Promise");
//     }, 0);

//     Promise.resolve().then(() => {
//       console.log("Promise.then inside Promise");
//     });

//     resolve("done");
//   });
// }

// wrappedPromise().then((val) => console.log("Promise then:", val));

// console.log("End of script");


// Example: 3

function wrappedPromise() {
  return new Promise((resolve) => {
    console.log("IPE");

    process.nextTick(() => {
      console.log("NT");
    });

    setTimeout(() => {
      console.log("T1");
    }, 0);

    Promise.resolve().then(() => {
      console.log("P1");
      Promise.resolve().then(() => {
        console.log("P2");
      });  

    });

    resolve("R1");
  });
}

wrappedPromise().then((val) => console.log(val));

console.log("EoS");