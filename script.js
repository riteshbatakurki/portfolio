// TYPING EFFECT

const text =
"Computer Science Engineering Student • Web Developer • Cybersecurity Enthusiast";

const typingText = document.getElementById("typing-text");

let i = 0;

function typingEffect() {

    if (i < text.length) {

        typingText.textContent += text.charAt(i);

        i++;

        setTimeout(typingEffect, 50);

    }

}

window.addEventListener("load", () => {

    typingEffect();

});


// CURSOR GLOW

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


// ACTIVE NAVBAR LINK

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});