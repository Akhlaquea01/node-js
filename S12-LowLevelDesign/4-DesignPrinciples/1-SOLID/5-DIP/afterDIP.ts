interface Engine{
    start(): void;
}
//@ts-ignore
class PetrolEngine  implements Engine{

    constructor(sparkPlug)
  
    start() {
    console.log("Petrol engine started");

    this.sparkPlug.ignite()
  }

}

class CNGEngine implements Engine {
    start() {
        console.log("CNG engine started");
    }
}

class DieselEngine implements Engine {
    start() {
        console.log("Diesel engine started");
    }
}


// @ts-ignore
class Car {
    private engine: Engine;
    // Dependency Injection
    // You can achieve Dependency Inversion by using Dependency Injection
    constructor(engine: Engine) {
        this.engine = engine;
    }

    startCar() {
        this.engine.start();
        console.log("Car started");
    }


}



