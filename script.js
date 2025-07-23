// Typing Effect
const typingElement = document.querySelector('.typing');
const textArray = ['Web Developer', 'AI Enthusiast', 'Problem Solver', 'UI Designer'];
let textIndex = 0, charIndex = 0, isDeleting = false;

function typeEffect() {
  if (!typingElement) return;
  const currentText = textArray[textIndex];

  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting) {
    charIndex++;
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 80 : 150);
}
document.addEventListener('DOMContentLoaded', typeEffect);

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTopBtn.classList.toggle("visible", window.scrollY > 300);
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle
const modeToggle = document.getElementById("mode-toggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  modeToggle.checked = true;
}
modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});
