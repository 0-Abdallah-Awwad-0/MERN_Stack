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
    // Make sure the target exists
    if (!target) {
      throw new Error("An attack requires a target!");
    }

    // Make sure the target is a Unit
    if (!(target instanceof Unit)) {
      throw new Error("Target must be a Unit!");
    }

    // Reduce the target's resilience by the attacker's power
    target.resilience -= this.power;

    console.log(
      `${this.name} attacked ${target.name} for ${this.power} damage.`,
    );
  }

  showStats() {
    console.log(
      `${this.name} | Cost: ${this.cost}, Power: ${this.power}, Resilience: ${this.resilience}`,
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
    // Make sure a target was provided
    if (!target) {
      throw new Error("An Effect requires a target!");
    }

    // Make sure the target is a Unit
    if (!(target instanceof Unit)) {
      throw new Error("Target must be a Unit!");
    }

    // Effects can only change power or resilience
    if (this.stat !== "power" && this.stat !== "resilience") {
      throw new Error("Effect must change power or resilience!");
    }

    // Increase or decrease the selected stat
    target[this.stat] += this.magnitude;

    console.log(`${this.name} was played on ${target.name}.`);
    console.log(this.text);
  }
}

// Turn 1: Create Red Belt Ninja
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

// Turn 1: Create Hard Algorithm
const hardAlgorithm = new Effect(
  "Hard Algorithm",
  2,
  "Increase target's resilience by 3.",
  "resilience",
  3,
);

// Play Hard Algorithm on Red Belt Ninja
hardAlgorithm.play(redBeltNinja);

// Turn 2: Create Black Belt Ninja
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Turn 2: Create Unhandled Promise Rejection
const unhandledPromiseRejection = new Effect(
  "Unhandled Promise Rejection",
  1,
  "Reduce target's resilience by 2.",
  "resilience",
  -2,
);

// Play it on Red Belt Ninja
unhandledPromiseRejection.play(redBeltNinja);

// Turn 3: Create Pair Programming
const pairProgramming = new Effect(
  "Pair Programming",
  3,
  "Increase target's power by 2.",
  "power",
  2,
);

// Play it on Red Belt Ninja
pairProgramming.play(redBeltNinja);

// Red Belt Ninja attacks Black Belt Ninja
redBeltNinja.attack(blackBeltNinja);

// Final stats
console.log("\nFinal Stats:");

redBeltNinja.showStats();
blackBeltNinja.showStats();
