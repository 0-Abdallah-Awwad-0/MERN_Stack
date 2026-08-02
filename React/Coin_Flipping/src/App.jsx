// Function that simulates flipping a coin
function tossCoin() {
    // Math.random() returns a number between 0 and 1
    // If the number is greater than 0.5 => "heads"
    // Otherwise => "tails"
    return Math.random() > 0.5 ? "heads" : "tails";
}

// Function that returns a Promise
function fiveHeads() {
    return new Promise((resolve, reject) => {

        // Counts how many heads have appeared in a row
        let headsCount = 0;

        // Counts the total number of flips
        let attempts = 0;

        // Keep flipping until we get 5 heads in a row
        while (headsCount < 5) {

            // Increase total attempts
            attempts++;

            // Flip the coin
            const result = tossCoin();

            // Show each flip
            console.log(`${result} was flipped`);

            // If the result is heads
            if (result === "heads") {
                // Increase consecutive heads count
                headsCount++;
            } else {
                // If tails appears, reset the consecutive count
                headsCount = 0;
            }
        }

        // When we finally get 5 heads in a row,
        // resolve the Promise with a success message
        resolve(`It took ${attempts} tries to flip five "heads" in a row.`);
    });
}

// Call the Promise
fiveHeads()
    .then((result) => {
        // Runs when resolve() is called
        console.log(result);
    })
    .catch((error) => {
        // Runs only if reject() is called
        console.log(error);
    });

// This runs immediately because creating a Promise
// does not block the rest of the code.
console.log("When does this run now?");