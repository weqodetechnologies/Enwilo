document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".blog-card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      window.location.href = "blogsopen.html";
    });
  });
});