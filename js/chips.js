    // ⭐ your rating logic (FontAwesome)
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

    // DATA: main + sub both store karo
    const coachingData = [
    // SCHOOL - Primary/Middle/High etc
    {
        main: "school",
        sub: "primary",
        name: "Winner Institute",
        location: "Sadashiv Peth, Pune, Maharashtra",
        image: "../images/winner.png",
        rating: 5,
        reviews: 10,
        tag: "Primary School",
    },
    {
        main: "school",
        sub: "primary",
        name: "Tapovan Institute For CA",
        location: "Shukrawar Peth, Pune, Maharashtra",
        image: "../images/tapovan.png",
        rating: 4.5,
        reviews: 10,
        tag: "Primary School",
    },
    {
        main: "school",
        sub: "high",
        name: "SIGNUM CLASSES",
        location: "Viman Nagar, Pune, Maharashtra",
        image: "../images/signum.png",
        rating: 4,
        reviews: 10,
        tag: "High School",
    },
    {
        main: "school",
        sub: "science",
        name: "SKhandelwal Classes",
        location: "Girgaon, Mumbai, Maharashtra",
        image: "../images/khandelwal.png",
        rating: 3.5,
        reviews: 10,
        tag: "Science 11-12",
    },
    {
        main: "school",
        sub: "middle",
        name: "Pushpa's Group Tuition",
        location: "Byculla, Mumbai, Maharashtra",
        image: "../images/pushpa's.png",
        rating: 5,
        reviews: 10,
        tag: "Middle School",
    },
    {
        main: "school",
        sub: "cbse",
        name: "CONCEPTREE Learning",
        location: "West Mambalam, Chennai, Tamil Nadu",
        image: "../images/conceptree.png",
        rating: 4.5,
        reviews: 10,
        tag: "CBSE Board",
    },

    // IT example
    {
        main: "it",
        sub: "all",
        name: "Tech Masters Academy",
        location: "Andheri, Mumbai, Maharashtra",
        image: "../images/conceptree.png",
        rating: 4.5,
        reviews: 21,
        tag: "IT & Tech",
    },

    // GOVT example
    {
        main: "govt",
        sub: "all",
        name: "Target Govt Exams",
        location: "Nagpur, Maharashtra",
        image: "../images/signum.png",
        rating: 4,
        reviews: 15,
        tag: "Government Exams",
    },
    ];

    const cardsContainer = document.getElementById("coachingCards");
    const mainChips = document.querySelectorAll(".chip[data-main]");
    const subWrappers = document.querySelectorAll(".subchips-wrapper");

    let selectedMain = "school";
    let selectedSub = "all";

    // ✅ render cards according to selectedMain + selectedSub
    function renderCards() {
    cardsContainer.innerHTML = "";

    const filtered = coachingData.filter((item) => {
        const mainMatch = item.main === selectedMain;
        const subMatch = selectedSub === "all" ? true : item.sub === selectedSub;
        return mainMatch && subMatch;
    });

    if (filtered.length === 0) {
        cardsContainer.innerHTML = `<p style="text-align:center;color:#777;grid-column:1/-1;">No institutes found.</p>`;
        return;
    }

    filtered.forEach((item) => {
        cardsContainer.innerHTML += `
        <div class="institute1-card">
            <div class="card-img">
            <img src="${item.image}" alt="${item.name}">
         <div class="rating1">
  <div class="stars">${generateStars(item.rating)}</div>

  <div class="review-count">
    <i class="fa fa-user"></i>
    <span>${item.reviews}</span>
  </div>
</div>

            </div>
            <div class="card1-body">
            <h3>${item.name}</h3>
            <p>${item.location}</p>
            <span class="tag1">${item.tag}</span>
            </div>
        </div>
        `;
    });
    }

    // ✅ show subchips for selected main
    function showSubChips(main) {
    subWrappers.forEach((w) => w.classList.remove("show"));

    const wrapper = document.querySelector(
        `.subchips-wrapper[data-parent="${main}"]`,
    );
    if (wrapper) wrapper.classList.add("show");
    }

    // ✅ reset subchips active to "All" when main changes
    function resetSubToAll(main) {
    selectedSub = "all";

    const wrapper = document.querySelector(
        `.subchips-wrapper[data-parent="${main}"]`,
    );
    if (!wrapper) return;

    const subs = wrapper.querySelectorAll(".chip.sub");
    subs.forEach((s) => s.classList.remove("active"));
    const allChip = wrapper.querySelector(`.chip.sub[data-sub="all"]`);
    if (allChip) allChip.classList.add("active");
    }

    // ✅ main chip click
    mainChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        mainChips.forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");

        selectedMain = chip.dataset.main;

        showSubChips(selectedMain);
        resetSubToAll(selectedMain);
        renderCards();
    });
    });

    // ✅ subchip click (event delegation)
    document.addEventListener("click", (e) => {
    const subChip = e.target.closest(".chip.sub");
    if (!subChip) return;

    // only inside visible wrapper
    const wrapper = subChip.closest(".subchips-wrapper");
    if (!wrapper || !wrapper.classList.contains("show")) return;

    wrapper
        .querySelectorAll(".chip.sub")
        .forEach((s) => s.classList.remove("active"));
    subChip.classList.add("active");

    selectedSub = subChip.dataset.sub;
    renderCards();
    });

    // ✅ default
    showSubChips(selectedMain);
    resetSubToAll(selectedMain);
    renderCards();





    // footer active link 
const links = document.querySelectorAll(".footer-links a");
const currentPage = window.location.pathname;

links.forEach(link => {
  if (currentPage.includes(link.getAttribute("href"))) {
    link.classList.add("active");
  }
});
