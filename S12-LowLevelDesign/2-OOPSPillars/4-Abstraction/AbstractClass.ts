abstract class Vehicle {
    make: string;
    model: string;
    abstract year: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    abstract start(): void;         // Methods that can't have a body / can't have an implmentation. It forces all the child class to have this implementaion

    stop() {
        console.log(`${this.make} ${this.model} is stopping`);
    }
}

const rail = new Vehicle();


abstract class bus extends Vehicle {

}

class car extends Vehicle {
    
    start(): void {
        console.log("Starting car using Petrol Engine");
    }
}

abstract class sedan extends car {

}




