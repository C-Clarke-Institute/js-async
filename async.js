// --- SIMPLE async/await EXAMPLE ---

// Regular Promise:
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Failed to load data!")), 2000);
    });
}

// // Using .then():
// console.log("--- USING .THEN ---");
// fetchData().then(data => console.log(data));

// Using async/await:
console.log("--- USING ASYNC/AWAIT ---");
async function getData() {
    try {
        console.log("1. Starting to fetch data...");
        const data = await fetchData(); // Pauses here until the promise resolves
        console.log("2. Data received:", data);
        console.log("3. Continuing...");
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
    
}

getData();
console.log("4. This runs while waiting for data...");

// --- MULTIPLE AWAITS ---
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function processSequentially() {
//     console.log("Start");
    
//     await delay(1000);
//     console.log("After 1 second");
    
//     await delay(1000);
//     console.log("After 2 seconds");
    
//     await delay(1000);
//     console.log("After 3 seconds");
    
//     console.log("Done!");
// }

// processSequentially();

// // --- AWAITING MULTIPLE PROMISES IN PARALLEL ---
// async function fetchAllData() {
//     // These run in parallel (both start at the same time):
//     const userPromise = fetchUser();
//     const postsPromise = fetchPosts();
//     const commentsPromise = fetchComments();
    
//     // Wait for all of them:
//     const user = await userPromise;
//     const posts = await postsPromise;
//     const comments = await commentsPromise;
    
//     console.log("All data fetched:", { user, posts, comments });
// }

// fetchAllData();