  document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");

    // redirect after submit
    window.location.href = "thank-you.html";
  });