document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".blog-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      window.location.href = "blogsopen.html";
    });
  });
});





// footer active link 
const links = document.querySelectorAll(".footer-links a");
const currentPage = window.location.pathname;

links.forEach(link => {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
