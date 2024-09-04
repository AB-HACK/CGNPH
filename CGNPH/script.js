document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const dropdownItems = document.querySelectorAll('.dropdown__item');
    const dropdownMenus = document.querySelectorAll('.dropdown__menu'); // Un-commented and defined dropdownMenus

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
                if (menu !== item.querySelector('.dropdown__menu')) {
                    menu.classList.remove('show');
                }
            });

            // Toggle the dropdown menu for the clicked item
            const menu = item.querySelector('.dropdown__menu');
            menu.classList.toggle('show');
        });
    });

    // Close the navbar and dropdowns if a click happens outside of it
    document.addEventListener('click', function (e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show'); // Close the navbar
            navToggle.classList.remove('open'); // Reset the toggle button

            dropdownMenus.forEach(menu => {
                menu.classList.remove('show'); // Close all dropdowns
            });
        }
    });
});
