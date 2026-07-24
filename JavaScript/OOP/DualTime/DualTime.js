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
                `${this.name} attacks ${target.name} for ${this.power} damage.`
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

            console.log(`${this.name} played on ${target.name}`);
            console.log(this.text);
        } else {
            throw new Error("Target must be a Unit!");
        }
    }
}

// Turn 1
const redBeltNinja = new Unit(
    "Red Belt Ninja",
    3,
    3,
    4
);

const hardAlgorithm = new Effect(
    "Hard Algorithm",
    2,
    "Increase target's resilience by 3",
    "resilience",
    3
);

hardAlgorithm.play(redBeltNinja);

// Turn 2
const blackBeltNinja = new Unit(
    "Black Belt Ninja",
    4,
    5,
    4
);

const unhandledPromiseRejection = new Effect(
    "Unhandled Promise Rejection",
    1,
    "Reduce target's resilience by 2",
    "resilience",
    -2
);

unhandledPromiseRejection.play(redBeltNinja);

// Turn 3
const pairProgramming = new Effect(
    "Pair Programming",
    3,
    "Increase target's power by 2",
    "power",
    2
);

pairProgramming.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);

// Final stats
console.log("\nFinal Stats:");

redBeltNinja.showStats();
blackBeltNinja.showStats();