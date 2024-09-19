// Toggle mobile menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navBurger = document.querySelector('.nav__burger');
const navClose = document.querySelector('.nav__close');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navBurger.classList.toggle('hidden');
    navClose.classList.toggle('hidden');
});

// Handle dropdowns
const dropdownToggles = document.querySelectorAll('.dropdown__toggle');

dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const dropdownMenu = toggle.nextElementSibling;
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
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
