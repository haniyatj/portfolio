// Initialize EmailJS
(function() {
  emailjs.init("GxGoge5CgSDD-c7QP"); // Replace with your EmailJS public key
})();

// Character counter for textarea
const messageTextarea = document.getElementById("message");
const charCount = document.getElementById("charCount");

messageTextarea.addEventListener("input", function () {
  const count = this.value.length;
  charCount.textContent = count;

  if (count > 500) {
    this.value = this.value.substring(0, 500);
    charCount.textContent = 500;
  }
});

// Form submission with EmailJS
document
  .getElementById("contactForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = this.querySelector(".submit-btn");
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "SENDING...";
    submitBtn.disabled = true;

    // Send email using EmailJS
    emailjs.sendForm('service_k0wuuiv', 'template_ru3vv5j', this)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        submitBtn.textContent = "MESSAGE SENT!";
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          document.getElementById("contactForm").reset();
          document.getElementById("charCount").textContent = "0";
        }, 2000);
      }, function(error) {
        console.log('FAILED...', error);
        submitBtn.textContent = "FAILED - TRY AGAIN";
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 2000);
      });
  });

// Smooth scroll for internal links
document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in animation to elements as they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });

  // Observe sections for animation
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});

// Add some interactive hover effects
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Parallax effect for hero section (commented out in original)
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     const heroContent = document.querySelector('.hero-content');

//     if (hero && heroContent) {
//         heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });
