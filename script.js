// -------------------- Fade-in animations --------------------
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
faders.forEach(el => observer.observe(el));

// -------------------- Parallax gradient --------------------
window.addEventListener("scroll", () => {
  const bg = document.querySelector(".bg-gradient");
  if (bg) bg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
});

// -------------------- Smooth scrolling --------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// -------------------- Mobile menu --------------------
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  if (mobileNav.style.display === "flex") {
    mobileNav.style.opacity = 0;
    setTimeout(() => (mobileNav.style.display = "none"), 200);
  } else {
    mobileNav.style.display = "flex";
    setTimeout(() => (mobileNav.style.opacity = 1), 10);
  }
});

// -------------------- Hero rotating text --------------------
const heroSection = document.querySelector(".hero");
const heroTexts = [
  {
    title: "Facility Management & Production Services",
    sub: "Smart solutions for landlords, venues, and organizations."
  },
  {
    title: "Your Space, Managed Better",
    sub: "We streamline operations so you can focus on growth."
  },
  {
    title: "Event-Ready at Any Scale",
    sub: "Professional AVL and coordination for every occasion."
  }
];

let currentHeroIndex = 0;

function showHeroText(index) {
  heroSection.querySelector(".hero-title").textContent = heroTexts[index].title;
  heroSection.querySelector(".hero-sub").textContent = heroTexts[index].sub;
  heroSection.querySelector(".hero-title").style.opacity = 0;
  heroSection.querySelector(".hero-sub").style.opacity = 0;

  setTimeout(() => {
    heroSection.querySelector(".hero-title").style.transition = "opacity 1s, transform 1s";
    heroSection.querySelector(".hero-sub").style.transition = "opacity 1s, transform 1s";
    heroSection.querySelector(".hero-title").style.opacity = 1;
    heroSection.querySelector(".hero-sub").style.opacity = 1;
    heroSection.querySelector(".hero-title").style.transform = "translateY(0)";
    heroSection.querySelector(".hero-sub").style.transform = "translateY(0)";
  }, 50);
}

// Initial display
showHeroText(currentHeroIndex);

// Rotate every 7 seconds
setInterval(() => {
  // Fade out current
  heroSection.querySelector(".hero-title").style.opacity = 0;
  heroSection.querySelector(".hero-title").style.transform = "translateY(-30px)";
  heroSection.querySelector(".hero-sub").style.opacity = 0;
  heroSection.querySelector(".hero-sub").style.transform = "translateY(-30px)";

  setTimeout(() => {
    currentHeroIndex = (currentHeroIndex + 1) % heroTexts.length;
    showHeroText(currentHeroIndex);
  }, 1000); // Match fade-out duration
}, 7000);
