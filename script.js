const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuIcon.classList.toggle('fa-x'); // change ☰ to ❌
    document.body.classList.toggle('no-scroll');
});

// Close menu when link is clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuIcon.classList.remove('fa-x');
        document.body.classList.remove('no-scroll');
    });
});
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    statusText.textContent = "";

    const formData = new FormData(form);

    try {
        const response = await fetch("https://formspree.io/f/mkowwwrk", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {
            statusText.textContent = "Message sent successfully!";
            statusText.classList.add("success");
            form.reset();
        } else {
            statusText.textContent = "Something went wrong. Please try again.";
            statusText.classList.add("error");
        }
    } catch (error) {
        statusText.textContent = "Network error. Please try later.";
        statusText.classList.add("error");
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
});

