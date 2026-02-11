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





document.addEventListener("DOMContentLoaded", () => {
  const grid1 = document.getElementById("blogsGrid1");
  const grid2 = document.getElementById("blogsGrid2");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  function show1(){
    grid1.classList.remove("is-hidden");
    grid2.classList.add("is-hidden");
    prevBtn.disabled = true;
    nextBtn.disabled = false;
  }
  function show2(){
    grid1.classList.add("is-hidden");
    grid2.classList.remove("is-hidden");
    prevBtn.disabled = false;
    nextBtn.disabled = true;
  }

  nextBtn.addEventListener("click", show2);
  prevBtn.addEventListener("click", show1);

  show1();
});
