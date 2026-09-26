class Animal {
    // Private field (only accessible inside the class)
    #name;
  
    constructor(name, sound) {
      this.#name = name;          // Private
      this.sound = sound;         // Public
    }
  
    // Public method
    speak() {
      console.log(`${this.#name} says ${this.sound}`);
    }
    // Method Overloading (JS Doens't support it)
    // speak(animal) {
    //     console.log(`${animal} says ${animal.sound}`);
    // }
  
    // Getter for name (read-only access)
    getName() {
      return this.#name;
    }
    
    #pvtMethod() {
        console.log("PrivateMethod");
    }
  
    // Setter for name (controlled access)
    setName(newName) {
      if (typeof newName === 'string' && newName.length > 0) {
        this.#name = newName;
      } else {
        console.log('Invalid name!');
      }
    }
}

class Mammal extends Animal {
    constructor(name, sound, type) {
        super(name, sound);   
        this.type = type;
    }

    breathe() {
        console.log(`${this.getName()} (${this.type}) is breathing... 🫁`);
    }

    speak() {
        console.log("This mammal speaks. Showcases mothod overriding");
    }

}

class Human extends Mammal {
    constructor(name, sound, type) {
        super(name, sound, type);
    }

    speak() {
        super.speak();
        console.log("We also chatter");
        this.#privateMethod();
    }

    #privateMethod() {
        // super.#privateMethod();
        console.log("Human PVT MTD")
    }

}

// const dog = new Mammal("Dodo", "Bark", "Pet");

// dog.breathe();

// const jay = new Human("Jay", "talk", "human")

// jay.speak()

// const a1 = new Animal("Jay", "Speak");
// const c1 = new Animal("Cat", "meow");

// c1.speak(a1);
// c1.speak();


const a1 = new Animal("Jay", "Speak");
const c1 = new Mammal("Cat", "meow");

a1.speak();
c1.speak();