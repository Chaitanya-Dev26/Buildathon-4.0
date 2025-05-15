document.addEventListener("DOMContentLoaded", function () {
    // Countdown
    const countdownDate = new Date("2025-06-01T00:00:00").getTime();
  
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelectorAll(".countdown .time-box span").forEach((span) => (span.textContent = 0));
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      const timeBoxes = document.querySelectorAll(".countdown .time-box span");
      if (timeBoxes.length >= 4) {
        timeBoxes[0].textContent = days;
        timeBoxes[1].textContent = hours;
        timeBoxes[2].textContent = minutes;
        timeBoxes[3].textContent = seconds;
      }
    }
  
    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
  
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
  