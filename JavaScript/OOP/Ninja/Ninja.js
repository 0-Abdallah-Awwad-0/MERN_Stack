class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    // Print the ninja's name
    sayName() {
        console.log(this.name);
    }

    // Print all stats
    showStats() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }

    // Increase health by 10
    drinkSake() {
        this.health += 10;
    }
}

// Example
const ninja1 = new Ninja("Murad");

ninja1.sayName();
ninja1.showStats();

ninja1.drinkSake();

console.log("After drinking sake:");
ninja1.showStats();