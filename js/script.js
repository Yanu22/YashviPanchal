

// Add this script at the end of your HTML body or in an external .js file
document.querySelector('.hamburger').addEventListener('click', function () {
    const navList = document.querySelector('.nav-right ul');
    navList.classList.toggle('active');
});

