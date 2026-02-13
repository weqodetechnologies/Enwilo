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
    // =================== IT (add 4) ===================
{
  main: "it",
  sub: "all",
  name: "CodeX Bootcamp",
  location: "Pune, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.6,
  reviews: 120,
  tag: "IT & Tech",
},
{
  main: "it",
  sub: "all",
  name: "Python Pro Academy",
  location: "Mumbai, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.5,
  reviews: 95,
  tag: "IT & Tech",
},
{
  main: "it",
  sub: "all",
  name: "Full Stack Hub",
  location: "Bengaluru, Karnataka",
  image: "../images/demo3.png",
  rating: 4.7,
  reviews: 160,
  tag: "IT & Tech",
},
{
  main: "it",
  sub: "all",
  name: "Data Science Studio",
  location: "Hyderabad, Telangana",
  image: "../images/demo4.png",
  rating: 4.4,
  reviews: 110,
  tag: "IT & Tech",
},

// =================== ENGINEERING & MEDICAL (4) ===================
{
  main: "eng_med",
  sub: "all",
  name: "IIT-JEE Champions",
  location: "Kota, Rajasthan",
  image: "../images/demo1.png",
  rating: 4.7,
  reviews: 320,
  tag: "Engineering & Medical",
},
{
  main: "eng_med",
  sub: "all",
  name: "NEET Success Academy",
  location: "Pune, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.6,
  reviews: 280,
  tag: "Engineering & Medical",
},
{
  main: "eng_med",
  sub: "all",
  name: "Engineering Edge Institute",
  location: "Hyderabad, Telangana",
  image: "../images/demo3.png",
  rating: 4.5,
  reviews: 190,
  tag: "Engineering & Medical",
},
{
  main: "eng_med",
  sub: "all",
  name: "Medical Mentors Hub",
  location: "Mumbai, Maharashtra",
  image: "../images/demo4.png",
  rating: 4.4,
  reviews: 160,
  tag: "Engineering & Medical",
},

// =================== ENTRANCE EXAMS (4) ===================
{
  main: "entrance",
  sub: "all",
  name: "CAT Crackers Institute",
  location: "Bengaluru, Karnataka",
  image: "../images/demo1.png",
  rating: 4.6,
  reviews: 210,
  tag: "Entrance Exams",
},
{
  main: "entrance",
  sub: "all",
  name: "GATE Genius Classes",
  location: "Pune, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.5,
  reviews: 155,
  tag: "Entrance Exams",
},
{
  main: "entrance",
  sub: "all",
  name: "MBA Prep Hub",
  location: "Delhi",
  image: "../images/demo3.png",
  rating: 4.4,
  reviews: 175,
  tag: "Entrance Exams",
},
{
  main: "entrance",
  sub: "all",
  name: "Law Entrance Academy",
  location: "Mumbai, Maharashtra",
  image: "../images/demo4.png",
  rating: 4.3,
  reviews: 120,
  tag: "Entrance Exams",
},

// =================== PROFESSIONAL COURSES (4) ===================
{
  main: "professional",
  sub: "all",
  name: "Digital Marketing Pro",
  location: "Mumbai, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.6,
  reviews: 110,
  tag: "Professional Courses",
},
{
  main: "professional",
  sub: "all",
  name: "Accounting & Tally Center",
  location: "Pune, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.4,
  reviews: 85,
  tag: "Professional Courses",
},
{
  main: "professional",
  sub: "all",
  name: "Graphic Design Studio",
  location: "Bengaluru, Karnataka",
  image: "../images/demo3.png",
  rating: 4.5,
  reviews: 130,
  tag: "Professional Courses",
},
{
  main: "professional",
  sub: "all",
  name: "Business Skills Academy",
  location: "Delhi",
  image: "../images/demo4.png",
  rating: 4.3,
  reviews: 70,
  tag: "Professional Courses",
},

// =================== FOREIGN EDUCATION (4) ===================
{
  main: "foreign",
  sub: "all",
  name: "IELTS Mastery",
  location: "Pune, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.7,
  reviews: 200,
  tag: "Foreign Education",
},
{
  main: "foreign",
  sub: "all",
  name: "Study Abroad Hub",
  location: "Mumbai, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.6,
  reviews: 160,
  tag: "Foreign Education",
},
{
  main: "foreign",
  sub: "all",
  name: "GRE & TOEFL Center",
  location: "Delhi",
  image: "../images/demo3.png",
  rating: 4.5,
  reviews: 140,
  tag: "Foreign Education",
},
{
  main: "foreign",
  sub: "all",
  name: "Overseas Education Point",
  location: "Hyderabad, Telangana",
  image: "../images/demo4.png",
  rating: 4.4,
  reviews: 100,
  tag: "Foreign Education",
},

// =================== LANGUAGE & COMMUNICATION (4) ===================
{
  main: "language",
  sub: "all",
  name: "Spoken English Academy",
  location: "Nagpur, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.5,
  reviews: 90,
  tag: "Language & Communication",
},
{
  main: "language",
  sub: "all",
  name: "Personality Development Hub",
  location: "Pune, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.4,
  reviews: 80,
  tag: "Language & Communication",
},
{
  main: "language",
  sub: "all",
  name: "French Learning Studio",
  location: "Mumbai, Maharashtra",
  image: "../images/demo3.png",
  rating: 4.3,
  reviews: 60,
  tag: "Language & Communication",
},
{
  main: "language",
  sub: "all",
  name: "Communication Skills Center",
  location: "Delhi",
  image: "../images/demo4.png",
  rating: 4.6,
  reviews: 120,
  tag: "Language & Communication",
},

// =================== VOCATIONAL SKILLS (4) ===================
{
  main: "vocational",
  sub: "all",
  name: "Beautician Training Center",
  location: "Pune, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.4,
  reviews: 70,
  tag: "Vocational Skills",
},
{
  main: "vocational",
  sub: "all",
  name: "Cooking & Baking Studio",
  location: "Mumbai, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.6,
  reviews: 110,
  tag: "Vocational Skills",
},
{
  main: "vocational",
  sub: "all",
  name: "Tailoring Skill Hub",
  location: "Nagpur, Maharashtra",
  image: "../images/demo3.png",
  rating: 4.3,
  reviews: 60,
  tag: "Vocational Skills",
},
{
  main: "vocational",
  sub: "all",
  name: "Photography Workshop",
  location: "Delhi",
  image: "../images/demo4.png",
  rating: 4.5,
  reviews: 90,
  tag: "Vocational Skills",
},

// =================== SPORTS COACHING (4) ===================
{
  main: "sports",
  sub: "all",
  name: "Cricket Coaching Academy",
  location: "Mumbai, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.6,
  reviews: 140,
  tag: "Sports Coaching",
},
{
  main: "sports",
  sub: "all",
  name: "Football Training Center",
  location: "Pune, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.4,
  reviews: 95,
  tag: "Sports Coaching",
},
{
  main: "sports",
  sub: "all",
  name: "Badminton Club",
  location: "Bengaluru, Karnataka",
  image: "../images/demo3.png",
  rating: 4.5,
  reviews: 120,
  tag: "Sports Coaching",
},
{
  main: "sports",
  sub: "all",
  name: "Yoga & Fitness Studio",
  location: "Delhi",
  image: "../images/demo4.png",
  rating: 4.3,
  reviews: 80,
  tag: "Sports Coaching",
},

// =================== MUSIC & DANCE (4) ===================
{
  main: "music",
  sub: "all",
  name: "Dance Academy",
  location: "Pune, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.6,
  reviews: 105,
  tag: "Music & Dance",
},
{
  main: "music",
  sub: "all",
  name: "Guitar Classes",
  location: "Mumbai, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.4,
  reviews: 85,
  tag: "Music & Dance",
},
{
  main: "music",
  sub: "all",
  name: "Piano Learning Studio",
  location: "Bengaluru, Karnataka",
  image: "../images/demo3.png",
  rating: 4.5,
  reviews: 95,
  tag: "Music & Dance",
},
{
  main: "music",
  sub: "all",
  name: "Classical Music Center",
  location: "Delhi",
  image: "../images/demo4.png",
  rating: 4.3,
  reviews: 70,
  tag: "Music & Dance",
},

// =================== ARTS & CREATIVE (4) ===================
{
  main: "arts",
  sub: "all",
  name: "Drawing & Painting Studio",
  location: "Mumbai, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.5,
  reviews: 80,
  tag: "Arts & Creative",
},
{
  main: "arts",
  sub: "all",
  name: "Creative Art Academy",
  location: "Pune, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.4,
  reviews: 65,
  tag: "Arts & Creative",
},
{
  main: "arts",
  sub: "all",
  name: "Craft Workshop Center",
  location: "Nagpur, Maharashtra",
  image: "../images/demo3.png",
  rating: 4.3,
  reviews: 55,
  tag: "Arts & Creative",
},
{
  main: "arts",
  sub: "all",
  name: "Photography & Art Hub",
  location: "Delhi",
  image: "../images/demo4.png",
  rating: 4.6,
  reviews: 100,
  tag: "Arts & Creative",
},

// =================== HEALTH & WELLNESS (4) ===================
{
  main: "health",
  sub: "all",
  name: "Meditation & Wellness",
  location: "Pune, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.6,
  reviews: 88,
  tag: "Health & Wellness",
},
{
  main: "health",
  sub: "all",
  name: "Nutrition Coaching",
  location: "Mumbai, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.4,
  reviews: 72,
  tag: "Health & Wellness",
},
{
  main: "health",
  sub: "all",
  name: "Fitness Training Center",
  location: "Delhi",
  image: "../images/demo3.png",
  rating: 4.5,
  reviews: 120,
  tag: "Health & Wellness",
},
{
  main: "health",
  sub: "all",
  name: "Yoga Studio",
  location: "Bengaluru, Karnataka",
  image: "../images/demo4.png",
  rating: 4.3,
  reviews: 64,
  tag: "Health & Wellness",
},

// =================== CAREER & PERSONALITY (4) ===================
{
  main: "career",
  sub: "all",
  name: "Interview Prep Academy",
  location: "Pune, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.5,
  reviews: 90,
  tag: "Career & Personality",
},
{
  main: "career",
  sub: "all",
  name: "Resume & Career Hub",
  location: "Mumbai, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.4,
  reviews: 75,
  tag: "Career & Personality",
},
{
  main: "career",
  sub: "all",
  name: "Soft Skills Center",
  location: "Delhi",
  image: "../images/demo3.png",
  rating: 4.6,
  reviews: 110,
  tag: "Career & Personality",
},
{
  main: "career",
  sub: "all",
  name: "Confidence Building Classes",
  location: "Nagpur, Maharashtra",
  image: "../images/demo4.png",
  rating: 4.3,
  reviews: 60,
  tag: "Career & Personality",
},

// =================== SPECIAL & REMEDIAL (4) ===================
{
  main: "special",
  sub: "all",
  name: "Remedial Learning Center",
  location: "Pune, Maharashtra",
  image: "../images/demo1.png",
  rating: 4.4,
  reviews: 50,
  tag: "Special & Remedial",
},
{
  main: "special",
  sub: "all",
  name: "Special Education Hub",
  location: "Mumbai, Maharashtra",
  image: "../images/demo2.png",
  rating: 4.5,
  reviews: 70,
  tag: "Special & Remedial",
},
{
  main: "special",
  sub: "all",
  name: "Counseling & Guidance",
  location: "Delhi",
  image: "../images/demo3.png",
  rating: 4.3,
  reviews: 45,
  tag: "Special & Remedial",
},
{
  main: "special",
  sub: "all",
  name: "Support Learning Academy",
  location: "Bengaluru, Karnataka",
  image: "../images/demo4.png",
  rating: 4.6,
  reviews: 85,
  tag: "Special & Remedial",
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
