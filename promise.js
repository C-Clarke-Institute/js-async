// --- CREATING A SIMPLE PROMISE ---
const myPromise = new Promise(function(resolve, reject) {
    // Do some asynchronous work here...
    let success = true; // Simulating success or failure
    setTimeout(function() {
        if (success) {
            // If everything went well, call resolve with the result:
            resolve("Success! Here's your data.");
        } else {
            // If something went wrong, call reject with the error:
            reject("Error: Something went wrong!");
        }
    }, 2000);
});

// --- CONSUMING A PROMISE (using .then and .catch) ---
console.log("1. Promise created. Waiting...");

myPromise
    .then(function(result) {
        console.log("2. Promise resolved:", result);
    })
    .catch(function(error) {
        console.log("2. Promise rejected:", error);
    })
    .finally(function() {
        console.log("3. Promise done (finally) - runs regardless of success/failure");
    });

console.log("4. Code continues running while promise is pending...");

// --- CHAINING PROMISES (Fixes Callback Hell!) ---
function getUserDataPromise() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("1. Got user data");
            resolve({ id: 1, name: "Alice" });
        }, 1000);
    });
}

function getOrdersPromise(user) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("2. Got orders for", user.name);
            resolve([1, 2, 3]);
        }, 1000);
    });
}

function getOrderDetailsPromise(orderId) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("3. Got details for order", orderId);
            resolve({ id: orderId, total: 100 });
        }, 1000);
    });
}

function getShippingStatusPromise(details) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("4. Got shipping status for order", details.id);
            resolve("Shipped");
        }, 1000);
    });
}

// --- CHAINING PROMISES (Clean and readable!) ---
console.log("--- CHAINING PROMISES ---");

getUserDataPromise()
    .then(function(user) {
        return getOrdersPromise(user);
    })
    .then(function(orders) {
        return getOrderDetailsPromise(orders[0]);
    })
    .then(function(details) {
        return getShippingStatusPromise(details);
    })
    .then(function(status) {
        console.log("✅ Final result (Promise chain):", status);
        console.log("🎉 Process complete!");
    })
    .catch(function(error) {
        console.log("❌ Error:", error);
    });