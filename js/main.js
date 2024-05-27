// Selecting DOM elements
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

// Get the current page from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const page = urlParams.get('page');

// Function to set header background based on scroll and page
const setHeaderBackground = () => {
    var scroll_position = window.scrollY;
    if (page !== 'home' || scroll_position > 250) {
        header.style.backgroundColor = '#29323c'; // Dark background
    } else {
        header.style.backgroundColor = 'transparent'; // Transparent background
    }
};

// Initial header background setting
setHeaderBackground();

// Toggle mobile menu visibility
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

// Change header background color on scroll
document.addEventListener('scroll', setHeaderBackground);

// Close mobile menu when a menu item is clicked
menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});
