// Get elements from the DOM
console.log('Getting elements from the DOM');
var navToggle = document.getElementById('nav-toggle');
console.log(navToggle);
var navMenu = document.getElementById('nav-menu');
console.log(navMenu);
var navBurger = document.querySelector('.nav__burger');
console.log(navBurger);
var navClose = document.querySelector('.nav__close');
console.log(navClose);
var dropdownItems = document.querySelectorAll('.dropdown__item');
console.log(dropdownItems);

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    console.log('Toggled nav menu:', navMenu.classList);

    // Toggle the icons (burger and close)
    if (navBurger.style.display === 'none') {
        navBurger.style.display = 'block';
        navClose.style.display = 'none';
        console.log('Displayed burger, hid close icon');
    } else {
        navBurger.style.display = 'none';
        navClose.style.display = 'block';
        console.log('Displayed close, hid burger icon');
    }
});

// Handle dropdowns
dropdownItems.forEach(item => {
    var toggle = item.querySelector('.dropdown__toggle');
    var dropdownMenu = item.querySelector('.dropdown__menu');
    console.log('Dropdown item:', item);

    toggle.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        console.log('Toggled dropdown menu:', dropdownMenu.style.display);
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!item.contains(event.target)) {
            dropdownMenu.style.display = 'none';
            console.log('Hid dropdown menu due to outside click');
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

// JavaScript to toggle between showing more/less content
document.getElementById("read-more-btn").addEventListener("click", function() {
    var content = document.getElementById("folktale-content");

    // Toggle expanded class and button text
    if (content.classList.contains("expanded")) {
        content.classList.remove("expanded");
        this.textContent = "Read More";
    } else {
        content.classList.add("expanded");
        this.textContent = "Read Less";
    }
});
