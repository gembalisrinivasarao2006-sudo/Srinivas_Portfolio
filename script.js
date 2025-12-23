/* ================= SCROLL REVEAL ================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


/* ================= MOBILE NAVBAR ================= */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when link clicked
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});


// ===== TYPING EFFECT =====
const roles = ["Aspiring Software Engineer", "Web Developer", "Problem Solver", "Full Stack Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const roleSpan = document.querySelector(".role-text");

function typeRole() {
    if (charIndex < roles[roleIndex].length) {
        roleSpan.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 2000);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        roleSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeRole();
});
