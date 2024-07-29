document.addEventListener('DOMContentLoaded', function() {
    var signupPage = document.getElementById('signup-page');
    var signupForm = document.getElementById('signup-form');
    var dialog = document.getElementById('dialog');
    var closeDialog = document.getElementById('close-dialog');
    var dialogMessage = document.getElementById('dialog-message');

    // Handle form submission
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Simulate form submission and show the dialog box
        // (In a real application, you would submit the form data to the server here)
        setTimeout(function() {
            // Hide the entire sign-up page
            signupPage.style.display = 'none';
            // Update and show the dialog box
            dialogMessage.innerHTML = '<h2>Welcome to the Community!</h2><p>Check your email for verification.</p>';
            dialog.style.display = 'flex'; // Show the dialog box
        }, 500); // Adjust timing as needed
    });

    // Close the dialog box when the close button is clicked
    closeDialog.addEventListener('click', function() {
        dialog.style.display = 'none'; // Hide the dialog box
        // Optionally, redirect to another page or take other actions
        // window.location.href = 'index.html'; // Example redirect
    });
});
