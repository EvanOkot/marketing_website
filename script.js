// js/script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.createElement('button');
    menuButton.innerText = 'Menu';
    menuButton.className = 'mobile-menu-button';
    document.querySelector('header nav').prepend(menuButton);

    menuButton.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        form.querySelectorAll('[required]').forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'red';
            } else {
                input.style.borderColor = 'initial';
            }
        });

        if (isValid) {
            form.submit();  // Submit the form if validation passes
        } else {
            alert('Please fill in all required fields.');
        }
    });
});


