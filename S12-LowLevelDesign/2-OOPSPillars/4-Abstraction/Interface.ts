
interface Drivable {
    xyz: string;
    drive(): void;
    start(): void;
    stop(): void;
}


interface Flyable {
    cruise(): void;
    takeoff(): void;
    land(): void;
}

class VehicleTS {
    public model;
    constructor(model: string) {
        this.model = model;
    }
}


// 
// Car --> Drive, stop, start

class Car extends VehicleTS implements Drivable {
    public xyz;
    constructor(model: string) {
        super(model);
        this.xyz = "abc";
    }
    drive(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
}



class Train extends VehicleTS implements Drivable {
    constructor(model: string) {
        super(model);
    }
    drive(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
}

class ElonsCar extends VehicleTS implements Drivable, Flyable{
    drive(): void {
        throw new Error("Method not implemented.");
    }
    start(): void {
        throw new Error("Method not implemented.");
    }
    stop(): void {
        throw new Error("Method not implemented.");
    }
    cruise(): void {
        throw new Error("Method not implemented.");
    }
    takeoff(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
}


class Airoplane extends VehicleTS implements Flyable {
    cruise(): void {
        throw new Error("Method not implemented.");
    }
    takeoff(): void {
        throw new Error("Method not implemented.");
    }
    land(): void {
        throw new Error("Method not implemented.");
    }
}

/*
Q. Can we instantiate an abstract class? No, 

Q. Can an interface have implementation? No

Q. Can an abstract class have properties? Yes

Q. Can an interface have properties? Yes

Q. Can an abstract class implement an interface? Yes

Q. Can an interface extend another interface? Yes

Q. Can an abstract class extend another abstract class? Yes

Q. Can an interface extend an abstract class? No

*/



