// // Wait for the document to fully load
// document.addEventListener("DOMContentLoaded", function () {
//     // Get the navbar toggle element and the menu
//     const navToggle = document.getElementById('nav-toggle');
//     const navMenu = document.getElementById('nav-menu');

//     // Add click event listener to the navbar toggle
//     navToggle.addEventListener('click', function () {
//         // Toggle the 'show' class to display/hide the menu
//         navMenu.classList.toggle('show');

//         // Toggle the 'open' class to change the icon
//         navToggle.classList.toggle('open');
//     });

//     // Close the menu when a link is clicked (optional)
//     const navLinks = document.querySelectorAll('.nav__link');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             // Hide the menu and reset the toggle icon
//             navMenu.classList.remove('show');
//             navToggle.classList.remove('open');
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const navToggle = document.getElementById('nav-toggle');
//     const navMenu = document.getElementById('nav-menu');
//     const dropdownItems = document.querySelectorAll('.dropdown__item');

//     navToggle.addEventListener('click', function () {
//         navMenu.classList.toggle('show');
//         navToggle.classList.toggle('open');
//     });

//     const navLinks = document.querySelectorAll('.nav__link');
//     navLinks.forEach(link => {
//         link.addEventListener('click', function () {
//             navMenu.classList.remove('show');
//             navToggle.classList.remove('open');
//         });
//     });

//     // Handle dropdown menus on mobile
//     dropdownItems.forEach(item => {
//         item.addEventListener('click', function (e) {
//             e.stopPropagation(); // Prevent the event from bubbling up to parent elements
//             this.classList.toggle('open'); // Toggle the 'open' class on the clicked item
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const dropdownItems = document.querySelectorAll('.dropdown__item');
    const dropdownMenus = document.querySelectorAll('.dropdown__menu');
    
    // Toggle the main nav menu
    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show');
        navToggle.classList.toggle('open');
    });

    // Handle dropdown menu toggle on click
    dropdownItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent click event from bubbling up

            // Close other dropdown menus if open
            dropdownMenus.forEach(menu => {
                if (menu !== this.querySelector('.dropdown__menu')) {
                    menu.classList.remove('show');
                }
            });

            // Toggle the sidebar display for the clicked dropdown
            const menu = this.querySelector('.dropdown__menu');
            menu.classList.toggle('show');
            menu.classList.toggle('sidebar');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function () {
        dropdownMenus.forEach(menu => {
            menu.classList.remove('show');
            menu.classList.remove('sidebar');
        });
    });
});
