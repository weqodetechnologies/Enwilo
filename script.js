// FAQ Accordion JS

document.addEventListener("DOMContentLoaded", function () {

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    if (!question) return;

    question.addEventListener("click", function () {

      // Close all other FAQ items
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          const otherIcon = other.querySelector(".icon");
          if (otherIcon) otherIcon.textContent = "+";
        }
      });

      // Toggle current FAQ
      item.classList.toggle("active");
      if (icon) {
        icon.textContent = item.classList.contains("active") ? "×" : "+";
      }
    });
  });

});
