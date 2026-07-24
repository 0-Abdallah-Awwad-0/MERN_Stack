class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        if (target instanceof Unit) {
            target.resilience -= this.power;

            console.log(
                `${this.name} attacked ${target.name} for ${this.power} damage.`
            );
        } else {
            throw new Error("Target must be a Unit!");
        }
    }

    showStats() {
        console.log(
            `${this.name} | Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience}`
        );
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            target[this.stat] += this.magnitude;

            console.log(`${this.name} was played on ${target.name}.`);
            console.log(this.text);
        } else {
            throw new Error("Target must be a Unit!");
        }
    }
}

// Unit cards
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Effect cards
const hardAlgorithm = new Effect(
    "Hard Algorithm",
    2,
    "Increase target's resilience by 3.",
    "resilience",
    3
);

const unhandledPromiseRejection = new Effect(
    "Unhandled Promise Rejection",
    1,
    "Reduce target's resilience by 2.",
    "resilience",
    -2
);

const pairProgramming = new Effect(
    "Pair Programming",
    3,
    "Increase target's power by 2.",
    "power",
    2
);

// Game actions
console.log("Starting stats:");
redBeltNinja.showStats();
blackBeltNinja.showStats();

console.log("\nPlaying effects:");

hardAlgorithm.play(redBeltNinja);
redBeltNinja.showStats();

unhandledPromiseRejection.play(redBeltNinja);
redBeltNinja.showStats();

pairProgramming.play(redBeltNinja);
redBeltNinja.showStats();

console.log("\nAttack:");

redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.showStats();