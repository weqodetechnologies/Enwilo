  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");

    // redirect after submit
    window.location.href = "thank-you.html";
  });







  // footer active link 
const links = document.querySelectorAll(".footer-links a");
const currentPage = window.location.pathname;

links.forEach(link => {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
