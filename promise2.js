function divideNumbers(a, b) {
    return new Promise(function(resolve, reject) {
        // Simulate some async work
        setTimeout(function() {
            if (b === 0) {
                reject("Cannot divide by zero!");
            } else {
                resolve(a / b);
            }
        }, 1000);
    });
}

// Test the promise:
console.log("--- DIVIDE NUMBERS ---");

divideNumbers(10, 5)
    .then(function(result) {
        console.log("10 / 5 =", result);
        return divideNumbers(10, result); // This will fail
    })
    .then(function(result) {
        console.log("10 / 2 =", result); // Never runs
    })
    .catch(function(error) {
        console.log("Caught an error:", error);
    })
    .finally(function() {
        console.log("Division operations finished.");
    });
