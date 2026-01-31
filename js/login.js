
document.getElementById("signInBtn").addEventListener("click", function () {
    window.location.href = "signup.html"; 
});








  // Go to Forgot Password page
  document.getElementById("backToLogin").addEventListener("click", function(e) {
    e.preventDefault(); // stop page from jumping
    window.location.href = "forgotpass.html"; // change to your file path if different
  });

  // Show/Hide password
  function togglePassword() {
    const passInput = document.getElementById("password");
    passInput.type = passInput.type === "password" ? "text" : "password";
  }

  // Sign Up page link
  document.getElementById("signupLink").addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "signup.html"; // change if your file name is different
  });

  // Sign In button (optional redirect after login)
  document.getElementById("signInBtn").addEventListener("click", function() {
    window.location.href = "home.html"; // or home page after login
  });







  // footer active link 
const links = document.querySelectorAll(".footer-links a");
const currentPage = window.location.pathname;

links.forEach(link => {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
