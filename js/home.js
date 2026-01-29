const toggleBtn = document.getElementById("instituteToggle");
const menu = document.getElementById("instituteMenu");

// OPEN / CLOSE when clicking the Institute button
toggleBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // stop event going upward
  menu.classList.toggle("show");
});

// When clicking a dropdown link → close menu ONLY
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent bubbling to toggle
    menu.classList.remove("show");
    // allow link to open normally
  });
});

// Close dropdown when clicking ANYWHERE else (using capture phase)
document.addEventListener(
  "click",
  function () {
    menu.classList.remove("show");
  },
  true,
);

//for white gry chips

document.addEventListener("DOMContentLoaded", function () {
  const chips = document.querySelectorAll(".chip");

  chips.forEach((chip) => {
    chip.addEventListener("click", function () {
      // gray chip ignore
      if (this.classList.contains("gray")) return;

      // toggle active (ON / OFF)
      this.classList.toggle("active");
    });
  });
});

const institutesData1 = [
  // KIDS
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
    name: "Podar Jumbo Kids",
    location: "Parsad Nagar, Maharashtra",
    image: "../images/euro.png",
    rating: 4.5,
    reviews: 20,
  },
  {
    type: "kids",
    name: "Podar Jumbo Kids",
    location: "Parsad Nagar, Maharashtra",
    image: "../images/safari.png",
    rating: 4.5,
    reviews: 12,
  },
  {
    type: "kids",
    name: "Podar Jumbo Kids",
    location: "Parsad Nagar, Maharashtra",
    image: "../images/sanskruti.png",
    rating: 5,
    reviews: 14,
  },
  {
    type: "kids",
    name: "Podar Jumbo Kids",
    location: "Parsad Nagar, Maharashtra",
    image: "../images/smartkdz.png",
    rating: 4.5,
    reviews: 24,
  },

  // PRIMARY
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

  // SECONDARY
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
    if (i < fullStars) {
      starsHTML += `<i class="fa fa-star"></i>`;
    } else if (i === fullStars && hasHalf) {
      starsHTML += `<i class="fa fa-star-half-alt"></i>`;
    } else {
      starsHTML += `<i class="fa fa-star-o"></i>`;
    }
  }

  return starsHTML;
}

const container = document.getElementById("institutesContainer");
const buttons = document.querySelectorAll(".tab-btn");

function loadInstitutes(type) {
  container.innerHTML = "";

  const filtered = institutesData1.filter((inst) => inst.type === type);

  filtered.forEach((inst) => {
    container.innerHTML += `
      <div class="institute-card">
        <img src="${inst.image}" alt="${inst.name}">

        <div class="institute-content">

          <!-- ⭐ rating row (image ke niche, like your screenshot) -->
          <div class="institute-rating-row">
          <div class="stars">
  ${generateStars(inst.rating)}
</div>


            <div class="review-count">
              <!-- user icon -->
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2-8 4.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5C20 16 16.42 14 12 14Z"/>
              </svg>
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

// TAB CLICK
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    loadInstitutes(btn.dataset.type);
  });
});

// LOAD DEFAULT
loadInstitutes("kids");

document.getElementById("demoBtn").addEventListener("click", function () {
  window.location.href = "contact.html";
});

document.getElementById("listingBtn").addEventListener("click", function () {
  window.location.href = "login.html";
});
