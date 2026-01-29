// ⭐ Review open animation
const stars = document.querySelectorAll("#reviewStars i");
const form = document.getElementById("reviewForm");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    form.classList.add("active");
    form.scrollIntoView({ behavior: "smooth" });
  });
});




