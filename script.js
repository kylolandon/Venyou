// Fade-in animations
const faders = document.querySelectorAll(".fade-in");
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
faders.forEach(el => obs.observe(el));


// Parallax gradient background
window.addEventListener("scroll", () => {
  const bg = document.querySelector(".bg-gradient");
  bg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
});


// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Mobile menu animation
const btn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");

  if (mobileNav.style.display === "flex") {
    mobileNav.style.opacity = 0;
    setTimeout(() => (mobileNav.style.display = "none"), 200);
  } else {
    mobileNav.style.display = "flex";
    setTimeout(() => (mobileNav.style.opacity = 1), 10);
  }
});


// Rotating Hero Text
const heroSets = document.querySelectorAll(".hero-set");
let currentIndex = 0;

function cycleHeroText() {
  heroSets[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % heroSets.length;
  heroSets[currentIndex].classList.add("active");
}

// rotate every 7 sec
setInterval(cycleHeroText, 7000);

// Fade-in elements
const faders = document.querySelectorAll(".fade-in");
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
faders.forEach((el) => obs.observe(el));


// Parallax background gradient
window.addEventListener("scroll", () => {
  const bg = document.querySelector(".bg-gradient");
  if (bg) bg.style.transform = `translateY(${window.scrollY * 0.15}px)`;
});


// Mobile menu animation
const btn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

btn.addEventListener("click", () => {
  const isOpen = btn.classList.toggle("open");
  mobileNav.style.display = isOpen ? "flex" : "none";
});

