// document.addEventListener("DOMContentLoaded", function () {
//     // Get the elements
//     const navToggle = document.getElementById('nav-toggle');
//     const navMenu = document.getElementById('nav-menu');
//     const dropdownItems = document.querySelectorAll('.dropdown__item');
//     const dropdownMenus = document.querySelectorAll('.dropdown__menu');
    
//     // Toggle the main nav menu
//     navToggle.addEventListener('click', function () {
//         navMenu.classList.toggle('show');
//         navToggle.classList.toggle('open');
//     });

//     // Handle dropdown menu toggle on click
//     dropdownItems.forEach(item => {
//         item.addEventListener('click', function (e) {
//             e.stopPropagation(); // Prevent click event from bubbling up

//             // Close other dropdown menus if open
//             dropdownMenus.forEach(menu => {
//                 if (menu !== this.querySelector('.dropdown__menu')) {
//                     menu.classList.remove('show');
//                 }
//             });

//             // Toggle the sidebar display for the clicked dropdown
//             const menu = this.querySelector('.dropdown__menu');
//             menu.classList.toggle('show');
//             menu.classList.toggle('sidebar');
//         });
//     });

//     // Close dropdowns when clicking outside
//     document.addEventListener('click', function () {
//         dropdownMenus.forEach(menu => {
//             menu.classList.remove('show');
//             menu.classList.remove('sidebar');
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    // Toggle the main nav menu
    function toggleNavMenu() {
        const navMenu = document.getElementById('nav-menu');
        const navToggle = document.getElementById('nav-toggle');
        if (navMenu && navToggle) {
            navMenu.classList.toggle('show');
            navToggle.classList.toggle('open');
        }
    }

    // Handle dropdown menu toggle
    function toggleDropdownMenu(e) {
        const dropdownMenu = e.currentTarget.querySelector('.dropdown__menu');
        if (dropdownMenu) {
            // Close other dropdowns
            document.querySelectorAll('.dropdown__menu.show').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                }
            });

            // Toggle the clicked dropdown
            dropdownMenu.classList.toggle('show');
        }
    }

    // Close all dropdowns
    function closeAllDropdowns() {
        document.querySelectorAll('.dropdown__menu.show').forEach(menu => {
            menu.classList.remove('show');
        });
    }

    // Attach event listeners
    function addEventListeners() {
        const navToggle = document.getElementById('nav-toggle');
        if (navToggle) {
            navToggle.addEventListener('click', toggleNavMenu);
        }

        document.addEventListener('click', function (e) {
            const isDropdownItem = e.target.closest('.dropdown__item');
            if (isDropdownItem) {
                toggleDropdownMenu(e);
                e.stopPropagation();
            } else {
                closeAllDropdowns();
            }
        });
    }

    // Initialize
    addEventListeners();
});
