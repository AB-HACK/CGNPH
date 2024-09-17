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
// Get the modal element
const modal = document.getElementById("modal");

// Get the button that opens the modal
const readMoreBtn = document.getElementById("readMoreBtn");

// Get the <span> element that closes the modal
const closeBtn = document.querySelector(".close-btn");

// When the user clicks the button, open the modal
readMoreBtn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}