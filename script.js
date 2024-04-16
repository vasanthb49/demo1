
function countdown(num, callback) {
    if (num <= 0) {
        // Base case: if countdown is completed, call the callback function
        callback();
    } else {
        // Display the countdown number on the document
        document.getElementById('countdown').innerText = num;
        // Set a timeout for the next countdown number
        setTimeout(function() {
            // Call the countdown function recursively with num - 1
            countdown(num - 1, callback);
        }, 1000); // 1000 milliseconds = 1 second
    }
}

// Start the countdown from 10

countdown(10, function() {
    // After countdown is completed, display "Happy Independence Day" on the document
    document.getElementById('countdown').innerText = "Happy Independence Day";
    document.getElementById('countdown').classList.remove("happyindependent")
    document.getElementById('countdown').classList.add("happyindependent");
    document.getElementById('countdown').removeAttribute('id');

});
