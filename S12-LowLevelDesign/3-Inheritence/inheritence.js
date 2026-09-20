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

const jay = new Human("Jay", "talk", "human")

jay.speak()
