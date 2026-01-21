document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".blog-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      window.location.href = "blogsopen.html";
    });
  });
});






document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    question.addEventListener("click", () => {

      // Close other FAQs (optional – remove if you want multiple open)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".icon").textContent = "+";
        }
      });

      // Toggle current FAQ
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        icon.textContent = "×";
      } else {
        icon.textContent = "+";
      }
    });
  });
});












// script.js

// Select the dropdown toggle (Institute)
const instituteDropdown = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Select the filter buttons
const filterButtons = document.querySelectorAll('.filter-buttons button');

// Select all cards
const cards = document.querySelectorAll('.card');

// Function to filter cards based on tag
function showCards(filter) {
  cards.forEach(card => {
    const tag = card.querySelector('.tag').textContent.trim();
    if (filter === 'all' || tag.toLowerCase().includes(filter.toLowerCase())) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Event: When Institute dropdown is clicked
instituteDropdown.addEventListener('click', (e) => {
  e.preventDefault(); // prevent default link behavior
  dropdownMenu.classList.toggle('show'); // toggle visibility of dropdown
});

// Optional: Click outside to close dropdown
window.addEventListener('click', (e) => {
  if (!instituteDropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove('show');
  }
});

// Event: Filter buttons click
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter based on button text
    const filter = btn.textContent.trim();
    showCards(filter);
  });
});

// Initially show only Kids School
showCards('Kids School');










document.addEventListener("DOMContentLoaded", function () {

  const chips = document.querySelectorAll(".chip");

  chips.forEach(chip => {
    chip.addEventListener("click", function () {

      // gray chip ko ignore karo
      if (this.classList.contains("gray")) return;

      // toggle active (ON / OFF)
      this.classList.toggle("active");
    });
  });

});











 function playVideo() {
    const video = document.getElementById("myVideo");
    video.play();
    document.querySelector(".play-btn").style.display = "none";
    video.setAttribute("controls", "controls");
  }








 
  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");

    // redirect after submit
    window.location.href = "thank-you.html";
  });














// OPEN POPUP
const loginBtn = document.querySelector('.login-btn');
const popup = document.getElementById('login-popup');
const closeBtn = document.querySelector('.close-btn');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'flex';
});

// CLOSE POPUP
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

// CLOSE WHEN CLICK OUTSIDE POPUP
window.addEventListener('click', (e) => {
  if(e.target === popup) {
    popup.style.display = 'none';
  }
});

// TOGGLE PASSWORD VISIBILITY
const togglePassword = document.querySelector('.toggle-password');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  if(passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});




