// ⭐ Review open animation
const stars = document.querySelectorAll("#reviewStars i");
const form = document.getElementById("reviewForm");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    form.classList.add("active");
    form.scrollIntoView({ behavior: "smooth" });
  });
});








document.addEventListener("DOMContentLoaded", () => {
  const starsWrap = document.getElementById("reviewStars");
  const form = document.getElementById("reviewForm");
  if (!starsWrap || !form) return;

  const stars = [...starsWrap.querySelectorAll("i[data-value]")];
  let selected = 0;

  function paintStars(val) {
    stars.forEach((s) => {
      const v = Number(s.dataset.value);
      s.classList.toggle("active", v <= val);
    });
  }

  starsWrap.addEventListener("click", (e) => {
    const star = e.target.closest("i[data-value]");
    if (!star) return;

    const value = Number(star.dataset.value);

    // ✅ same star again => reset + close
    if (selected === value) {
      selected = 0;
      paintStars(0);
      form.classList.remove("active");
      return;
    }

    // ✅ select => fill + open form
    selected = value;
    paintStars(selected);
    form.classList.add("active");
  });
});



const publishBtn = document.getElementById("publishReviewBtn");

if (publishBtn) {
  publishBtn.addEventListener("click", () => {

    // form close
    form.classList.remove("active");

    // stars reset
    selected = 0;
    paintStars(0);

    // optional success alert
    alert("Review submitted successfully!");
  });
}






// footer active link 
const links = document.querySelectorAll(".footer-links a");
const currentPage = window.location.pathname;

links.forEach(link => {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});

