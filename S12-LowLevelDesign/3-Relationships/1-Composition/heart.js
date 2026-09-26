// HAS-A (Strong)
// COMPOSITION

class Heart {
    beat() {
        console.log("Beating at 72 BPM")
    }
}

class Human {
    #heart;
    constructor() {
        this.#heart = new Heart();  // H1, H2
    }

    // donor() {
    //     return this.#heart()
    // }

    // receivingHeart(heart) {
    //     this.#heart = heart;
    // }
    //...
}

// class 

class Human2 {
    #heart;
    constructor() {
        this.#heart = new Heart();  // H1, H2
    }
    //...
}

const jay = new Human();
const bhaskar = new Human2();
