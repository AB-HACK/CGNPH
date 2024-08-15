// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get the navbar toggle element and the menu
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Add click event listener to the navbar toggle
    navToggle.addEventListener('click', function () {
        // Toggle the 'show' class to display/hide the menu
        navMenu.classList.toggle('show');

        // Toggle the 'open' class to change the icon
        navToggle.classList.toggle('open');
    });

    // Close the menu when a link is clicked (optional)
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Hide the menu and reset the toggle icon
            navMenu.classList.remove('show');
            navToggle.classList.remove('open');
        });
    });
});
