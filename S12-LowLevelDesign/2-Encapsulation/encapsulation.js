// 'use strict'
class Car {
    // #make; --> Private
    // make; --> public
    #make;
    #model;
    constructor(make, model) {
        this.#make = make;
        this.#model = model;
    }

    // add(a, a) {
    //     return a+a;
    // }
    
    start() {
        this.#igniteSparkPlug();
        console.log(`${this.#make} ${this.#model} is starting`)
    }

    #igniteSparkPlug(){
        console.log("Adding fire to fuel");
    }


    drive = function() {
        console.log(`${this.make} ${this.#model} is cruising`)
    }
}


const fortuner = new Car("Toyota", "Fortuner");

// fortuner.#make = "Maruti";
fortuner.model = "Alto";

fortuner.start();

// fortuner.#igniteSparkPlug();
