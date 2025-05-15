// Countdown Timer
const countdown = () => {
    // Set the date/time for the event (example: June 20, 2025 at 10:00 AM)
    const eventDate = new Date("June 20, 2025 10:00:00").getTime();
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;
  
      if (timeLeft <= 0) {
        clearInterval(interval);
        document.querySelector(".countdown").innerHTML = "<div class='time-box'>Hackathon Started!</div>";
        return;
      }
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
  
      const timeBoxes = document.querySelectorAll(".time-box span");
      timeBoxes[0].textContent = days;
      timeBoxes[1].textContent = hours;
      timeBoxes[2].textContent = minutes;
      timeBoxes[3].textContent = seconds;
    }, 1000);
  };
  
  countdown();
  
// Smooth scroll + active navbar link on scroll
const navLinks = document.querySelectorAll("nav a");

// Smooth scroll on click
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });

    navLinks.forEach(link => link.classList.remove("active"));
    this.classList.add("active");
  });
});

// Highlight active link on scroll
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 80;

  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(link => link.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

  document.addEventListener("DOMContentLoaded", () => {
    // FAQ Accordion
    document.querySelectorAll(".faq-question").forEach((button) => {
      button.addEventListener("click", () => {
        const faqItem = button.parentElement;
  
        document.querySelectorAll(".faq-item").forEach((item) => {
          if (item !== faqItem) {
            item.classList.remove("active");
          }
        });
  
        faqItem.classList.toggle("active");
      });
    });
  });
  