/* =========================
   PROJECTS SECTION (JS)
========================= */

const projects = [
    {
        title: "Railway Track Crack Detection System",
        description: "Designed and implemented a real-time railway safety system using Raspberry Pi, Arduino Nano, OpenCV, GPS, and IoT. Detects track cracks automatically and sends location alerts for proactive maintenance."
    },
    
    {
        title: "Calculator App",
        description: "Created a responsive calculator using HTML, CSS, and JavaScript to perform basic arithmetic operations with an interactive user interface."
    },
    {
        title: "To-Do List",
        description: "Developed a task management application that allows users to add, edit, complete, and delete tasks with data stored in browser local storage."
    },
    {
        title: "Number Guessing Game",
        description: "Built an interactive JavaScript game where users guess a randomly generated number and receive hints until the correct answer is found."
    }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
    const li = document.createElement("li");

    li.innerHTML = `
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
    `;

    projectList.appendChild(li);
});
 

/* =========================
   CONTACT FORM VALIDATION
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Indian phone number validation (10 digits, optional +91)
    const phonePattern = /^(?:\+91)?[6-9]\d{9}$/;

    // Name validation
    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        formMessage.style.color = "#CA6180";
        return;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "#CA6180";
        return;
    }

    // Phone validation
    if (!phonePattern.test(phone)) {
        formMessage.textContent = "Please enter a valid phone number.";
        formMessage.style.color = "#CA6180";
        return;
    }

    // Message validation
    if (message === "") {
        formMessage.textContent = "Please enter your message.";
        formMessage.style.color = "#CA6180";
        return;
    }

    // Success message
    formMessage.textContent = "Message sent successfully! Thank you for contacting me.";
    formMessage.style.color = "lightgreen";

    // Reset form
    contactForm.reset();
});


// Responsive Hamburger Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
const links = document.querySelectorAll("#nav-links a");

links.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});