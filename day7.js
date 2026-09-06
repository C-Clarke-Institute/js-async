// console.log("1. Start");

// function slowFunction() {
//     let start = Date.now();
//     while(Date.now() - start < 3000) {
//         //Loop runs for 3 seconds
        
//     }
//     console.log("2. Slow function finished");
// }

// slowFunction();
// console.log("3. END")

console.log("1. Start");

// function greet(name) {
//     console.log("2. Hello " + name);
// }

// const greetId = setTimeout(greet, 0, "John");

// let maxTries = 3;
// const intervalId = setInterval(() => {
//     console.log("4. Fetching data from server...");
//     maxTries--;
//     if(maxTries === 0) {
//         clearInterval(intervalId);
//         console.log("5. Interval cleared");
//     }
// }, 1000);

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("5. Interval cleared");
// }, 5000);

// console.log("3. END");

//Write a countdown timer using setInterval that 
// counts down from 10 to 0 and then clears the interval and logs 
// "Countdown finished".

let countdown = 10;

const timerId = setInterval(() => {
    countdown--;
    console.log(countdown);
    if(countdown === 0) {
        clearInterval(timerId);
        console.log("Countdown finished");
    }
}, 1000);


//1. Get user data from a server.
//2. Based on that data , get user's orders from a server.
//3. Based on the orders, get the order details from a server.
//4. Based on the order details, get the shipping status from a server.


// --- CALLBACK HELL (NEVER DO THIS) ---
console.log("Starting the process...");

// Simulating asynchronous operations with setTimeout
function getUserData(callback) {
    setTimeout(function() {
        console.log("1. Got user data");
        const user = { id: 1, name: "Alice" };
        callback(user);
    }, 1000);
}

function getOrders(user, callback) {
    setTimeout(function() {
        console.log("2. Got orders for", user.name);
        const orders = [1, 2, 3];
        callback(orders);
    }, 1000);
}

function getOrderDetails(orderId, callback) {
    setTimeout(function() {
        console.log("3. Got details for order", orderId);
        const details = { id: orderId, total: 100 };
        callback(details);
    }, 1000);
}

function getShippingStatus(details, callback) {
    setTimeout(function() {
        console.log("4. Got shipping status for order", details.id);
        const status = "Shipped";
        callback(status);
    }, 1000);
}

// CHAINING THEM TOGETHER - THIS IS CALLBACK HELL!
getUserData(function(user) {
    getOrders(user, function(orders) {
        getOrderDetails(orders[0], function(details) {
            getShippingStatus(details, function(status) {
                console.log("✅ Final result:", status);
                console.log("🎉 Process complete!");
            });
        });
    });
});

// This is called the "Pyramid of Doom" - indentations keep going deeper!