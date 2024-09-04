document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const dropdownItems = document.querySelectorAll('.dropdown__item');
    // const dropdownMenus = document.querySelectorAll('.dropdown__menu');

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
/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')


// ------THIS IS FOR SLIDE-----
// new Swiper('.card-wrapper', {
//     loop: true,
//     slidesPerView: 3,
//     spaceBetween: 10,

//     // Pagination bullets
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // Responsive breakpoint
//     breakpoint: {
//         0:{
//             sliderPerView: 1
//         },
//         768:{
//             sliderPerView: 2
//         },
//         1024:{
//             sliderPerView: 3
//         },
//     }
// });


