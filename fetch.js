function fetchQuoteAsync() {
    // const display = document.querySelector('#quote-display');
    // display.innerHTML = '<p class="loading">Loading quote...</p>';
    
    console.log("Fetching quote with .then()...");
    
    fetch('http://api.quotable.io/random')
        .then(function(response) {
            // Check if the response was successful:
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON:
            return response.json();
        })
        .then(function(data) {
            // Display the data:
            console.log("Quote data:", data);
            // displayQuote(data);
        })
        .catch(function(error) {
            console.error("Error:", error);
            // displayError(error.message);
        });
}

fetchQuoteAsync();


