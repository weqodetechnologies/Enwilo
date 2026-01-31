
document.getElementById("backToLogin").addEventListener("click", function(e){
    e.preventDefault();
    window.location.href = "login.html";
});






// footer active link 
const links = document.querySelectorAll(".footer-links a");
const currentPage = window.location.pathname;

links.forEach(link => {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
