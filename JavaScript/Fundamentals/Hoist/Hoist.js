// Assignment: JavaScript Hoisting

console.log("========== QUESTION 1 ==========");

(function () {
    // After hoisting:
    var hello;

    console.log(hello); // undefined
    hello = "world";
})();


console.log("\n========== QUESTION 2 ==========");

(function () {
    // After hoisting:
    var needle;

    function test() {
        var needle;

        needle = "magnet";
        console.log(needle); // magnet
    }

    needle = "haystack";
    test();
})();


console.log("\n========== QUESTION 3 ==========");

(function () {
    // After hoisting:
    var brendan;

    function print() {
        brendan = "only okay";
        console.log(brendan);
    }

    brendan = "super cool";

    console.log(brendan); // super cool

    // print() is never called
})();


console.log("\n========== QUESTION 4 ==========");

(function () {
    // After hoisting:
    var food;

    function eat() {
        var food;

        food = "half-chicken";
        console.log(food); // half-chicken

        food = "gone";
    }

    food = "chicken";

    console.log(food); // chicken
    eat();
})();


console.log("\n========== QUESTION 5 ==========");

try {
    (function () {
        // After hoisting:
        var mean;

        mean(); // Error: mean is undefined here

        console.log(food);

        mean = function () {
            var food;

            food = "chicken";
            console.log(food);

            food = "fish";
            console.log(food);
        };

        console.log(food);
    })();
} catch (error) {
    console.log(error.name + ": " + error.message);
}


console.log("\n========== QUESTION 6 ==========");

(function () {
    // After hoisting:
    var genre;

    function rewind() {
        var genre;

        genre = "rock";
        console.log(genre); // rock

        genre = "r&b";
        console.log(genre); // r&b
    }

    console.log(genre); // undefined

    genre = "disco";

    rewind();

    console.log(genre); // disco
})();


console.log("\n========== QUESTION 7 ==========");

(function () {
    // After hoisting:
    function learn() {
        var dojo;

        dojo = "seattle";
        console.log(dojo); // seattle

        dojo = "burbank";
        console.log(dojo); // burbank
    }

    dojo = "san jose";

    console.log(dojo); // san jose

    learn();

    console.log(dojo); // san jose
})();


console.log("\n========== QUESTION 8 ==========");

try {
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));

    function makeDojo(name, students) {
        const dojo = {};

        dojo.name = name;
        dojo.students = students;

        if (dojo.students > 50) {
            dojo.hiring = true;
        } else if (dojo.students <= 0) {
            dojo = "closed for now"; // Error: const cannot be reassigned
        }

        return dojo;
    }
} catch (error) {
    console.log(error.name + ": " + error.message);
}