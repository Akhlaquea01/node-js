class Address {
    constructor(street, city) {
        this.street = street;
        this.city = city;
    }
    getCity() {
        return this.city;
    }
}

class Customer {
    constructor(name, address, cAddress) {
        this.name = name;
        this.address = address;
        this.currentAddress = cAddress;
    }
    
    getAddress() {
        return this.address;
    }

    getCurrentAddress() {
        return this.currentAddress;
    }

}



class Order {
    constructor(customer) {
        this.customer = customer;
    }
    
    printShipingCity() {
        console.log( this.customer.address.city);
    }

    printShipingCity() {
        console.log( this.customer.getAddress().city);
    }

}



