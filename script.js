// Typing Effect
const typingElement = document.querySelector('.typing');
const textArray = ['Web Developer', 'AI Enthusiast', 'Problem Solver'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    if (textIndex < textArray.length) {
        const currentText = textArray[textIndex];
        if (charIndex < currentText.length) {
            typingElement.textContent += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(type, isDeleting ? 100 : 150);
        } else {
            isDeleting = true;
            setTimeout(type, 1000); // Delay before starting to delete
        }
    } else if (isDeleting && charIndex > 0) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 500); // Delay before typing next text
    }
}

document.addEventListener('DOMContentLoaded', type);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//
// Responsive Navbar Toggle
const navbarMenu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch('https://your-form-endpoint-url.com', { // Update with your form handling URL
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Redirect to the home page if submission is successful
                window.location.href = 'index.html'; // Update with your home page URL
            } else {
                // Handle errors here
                console.error('Form submission failed.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

