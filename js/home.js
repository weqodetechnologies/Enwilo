document.addEventListener("DOMContentLoaded", function () {
  // ================= DROPDOWN SAFE =================
  const toggleBtn = document.getElementById("instituteToggle");
  const menu = document.getElementById("instituteMenu");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.classList.toggle("show");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.stopPropagation();
        menu.classList.remove("show");
      });
    });

    document.addEventListener("click", function () {
      menu.classList.remove("show");
    });
  }

  // ================= CHIPS SAFE =================
  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    chip.addEventListener("click", function () {
      if (this.classList.contains("gray")) return;
      this.classList.toggle("active");
    });
  });

  // ================= DATA =================
  const institutesData1 = [
    {
      type: "kids",
      name: "Kidzee Duliajan",
      location: "Christian Basti Near Duliajan, Assam",
      image: "../images/kedzee.png",
      rating: 5,
      reviews: 10,
    },
    {
      type: "kids",
      name: "Podar Jumbo Kids",
      location: "Parsad Nagar, Maharashtra",
      image: "../images/podar.png",
      rating: 4.5,
      reviews: 24,
    },
    {
      type: "kids",
      name: "Euro Kids",
      location: "Abhyankar Nagar, Nagpur, Maharashtra",
      image: "../images/euro.png",
      rating: 4.5,
      reviews: 20,
    },
    {
      type: "kids",
      name: "Safari Kid ",
      location: "Malad, Mumbai, Maharashtra",
      image: "../images/safari.png",
      rating: 4.5,
      reviews: 12,
    },
    {
      type: "kids",
      name: "Sanskruti School",
      location: "Wakad, Pune, Maharashtra",
      image: "../images/sanskruti.png",
      rating: 5,
      reviews: 14,
    },
    {
      type: "kids",
      name: "SMARTKIDZ",
      location: "Christian Basti Near Duliajan, Assam",
      image: "../images/smartkdz.png",
      rating: 4.5,
      reviews: 24,
    },

    {
      type: "primary",
      name: "Yashoda High School",
      location: "Trimurti Nagar,Maharashtra,Nagpur",
      image: "../images/primary1.png",
      rating: 5,
      reviews: 19,
    },
    {
      type: "primary",
      name: "Centre Point",
      location: "Seminary Hills,Maharashtra,Nagpur",
      image: "../images/primary2.png",
      rating: 4.5,
      reviews: 15,
    },
    {
      type: "primary",
      name: "VIBGYOR Rise",
      location: "Malad West,Maharashtra,Mumbai",
      image: "../images/primary3.png",
      rating: 4.5,
      reviews: 14,
    },
    {
      type: "primary",
      name: "Dr. Kalmadi Shamarao",
      location: "Baner,Maharashtra,Pune",
      image: "../images/primary4.png",
      rating: 4.5,
      reviews: 24,
    },
    {
      type: "primary",
      name: "Sunrise Public School",
      location: "Koodal Nagar,Tamil Nadu,Madurai",
      image: "../images/primary5.png",
      rating: 4.5,
      reviews: 17,
    },
    {
      type: "primary",
      name: "Chhabildas School",
      location: "Dadar,Maharashtra,Mumbai",
      image: "../images/primary.6.png",
      rating: 4.5,
      reviews: 14,
    },

    {
      type: "secondary",
      name: "Mount Carmel School",
      location: "Christian Basti Near,Assam,Duliajan",
      image: "../images/secondery1.png",
      rating: 5,
      reviews: 24,
    },
    {
      type: "secondary",
      name: "Kidzee Duliajan",
      location: "Malad West,Maharashtra,Mumbai ",
      image: "../images/secondery2.png",
      rating: 4.5,
      reviews: 12,
    },
    {
      type: "secondary",
      name: "Global Indian",
      location: "Mahalunge,Maharashtra, Pune",
      image: "../images/secondery3.png",
      rating: 5,
      reviews: 24,
    },
    {
      type: "secondary",
      name: "St. Bede's Anglo",
      location: "Santhome,Tamil Nadu,Chennai",
      image: "../images/secondery4.png",
      rating: 4.5,
      reviews: 12,
    },
    {
      type: "secondary",
      name: "Somalwar High School",
      location: "Shastri Layout, Khamla, Maharashtra,Nagpur",
      image: "../images/secondery5.png",
      rating: 4.5,
      reviews: 14,
    },
    {
      type: "secondary",
      name: "SMARTKIDZ",
      location: "Samarth Nagar East,Maharashtra,Nagpur",
      image: "../images/secondery6.png",
      rating: 3.5,
      reviews: 24,
    },
  ];

  function generateStars(rating) {
    const safeRating = Math.max(0, Math.min(5, rating));
    const fullStars = Math.floor(safeRating);
    const hasHalf = safeRating % 1 >= 0.5;

    let starsHTML = "";
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) starsHTML += `<i class="fa fa-star"></i>`;
      else if (i === fullStars && hasHalf)
        starsHTML += `<i class="fa fa-star-half-alt"></i>`;
      else starsHTML += `<i class="fa fa-star-o"></i>`;
    }
    return starsHTML;
  }

  // ================= RENDER =================
  const container = document.getElementById("institutesContainer");
  const buttons = document.querySelectorAll(".tab-btn");

  if (!container) {
    console.log("❌ institutesContainer not found in HTML");
    return;
  }

  function loadInstitutes(type) {
    container.innerHTML = "";
    const filtered = institutesData1.filter((inst) => inst.type === type);

    filtered.forEach((inst) => {
      container.innerHTML += `
        <div class="institute-card">
          <img src="${inst.image}" alt="${inst.name}">
          <div class="institute-content">
            <div class="institute-rating-row">
              <div class="stars">${generateStars(inst.rating)}</div>
              <div class="review-count">
              <i class="fa fa-user"></i>
                <span>${inst.reviews ?? 0}</span>
              </div>
            </div>
            <div class="institute-name">${inst.name}</div>
            <div class="institute-location">${inst.location}</div>
            <span class="institute-tag">${type.charAt(0).toUpperCase() + type.slice(1)} School</span>
          </div>
        </div>
      `;
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      loadInstitutes(btn.dataset.type);
    });
  });

  loadInstitutes("kids"); // default

  // ================= BUTTONS SAFE =================
  const demoBtn = document.getElementById("demoBtn");
  if (demoBtn)
    demoBtn.addEventListener(
      "click",
      () => (window.location.href = "contact.html"),
    );

  const listingBtn = document.getElementById("listingBtn");
  if (listingBtn)
    listingBtn.addEventListener(
      "click",
      () => (window.location.href = "login.html"),
    );
});








document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("instituteToggle");
  const menu = document.getElementById("instituteMenu");

  if (!toggleBtn || !menu) return;

  // Toggle dropdown
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
  });

  // Link click → allow navigation + close menu
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("show"); 
      // yaha preventDefault mat lagana, nahi toh page open nahi hoga
    });
  });

  // Outside click → close
  document.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("instituteToggle");
  const menu = document.getElementById("instituteMenu");

  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});






  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    if (link.getAttribute("href").includes(currentLocation)) {
      link.classList.add("active");
    }
  });

