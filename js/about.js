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







document.getElementById("contactBtn").addEventListener("click", function(e) {
    e.preventDefault(); // stops # from jumping
    window.location.href = "contact.html"; 
});





// footer active link 
const links = document.querySelectorAll(".footer-links a");
const currentPage = window.location.pathname;

links.forEach(link => {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
