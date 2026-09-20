// Object Literal
// const car = {
//     make: "Toyota", 
//     model: "Camary", 
//     start: function() {
//         console.log(`${this.make} ${this.model} is starting`)
//     }
// }

// const car1 = {
//     company: "Toyota", 
//     variant: "Camary", 
//     start: function() {
//         console.log(`${this.make} ${this.model} is starting`)
//     }, 
//     drive: function() {}
// }


// // Exmaple usage: 
// car.start()

/* Problems:
- Lead to huge code duplication (create 20K cars)
- Lacks structure 
- Lacks extensibility
*/

// Constructor function

// function Car(make, model) {
//     this.make = make;
//     this.model = model;

//     this.start = function() {
//         console.log(`${this.make} ${this.model} is starting`)
//     }

//     this.drive = function() {
//         console.log(`${this.make} ${this.model} is cruising`)
//     }
// }

// // function ElecticCar --> Should have all the capabilities of Car + charging

// const fortuner = new Car("Toyota", "Fortuner");

// fortuner.make = "Maruti";
// fortuner.model = "Alto";

// fortuner.drive();

// const swift = new Car("Maruti", "Swift");

// swift.start();
// swift.drive();

// Problems: 
// - Extensibility is missing
// - Compromised security (attributes and behaviours can be changed)



// Third representation: class keyword


class Car {
    // #make; --> Private
    // make; --> public
    #make;
    #model;
    constructor(make, model) {
        this.#make = make;
        this.#model = model;
    }
    
    start = function() {
        console.log(`${this.#make} ${this.#model} is starting`)
    }

    drive = function() {
        console.log(`${this.make} ${this.#model} is cruising`)
    }
}


const fortuner = new Car("Toyota", "Fortuner");

// fortuner.#make = "Maruti";
fortuner.model = "Alto";

fortuner.drive();
