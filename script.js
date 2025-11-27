// -------------------- Fade-in elements --------------------
const faders = document.querySelectorAll(".fade-in");
const obs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
});
faders.forEach(el => obs.observe(el));

// -------------------- Parallax background --------------------
window.addEventListener("scroll", () => {
  const bg = document.querySelector(".bg-gradient");
  if(bg) bg.style.transform = `translateY(${window.scrollY * 0.15}px)`;
});

// -------------------- Smooth scroll --------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target) target.scrollIntoView({behavior:"smooth"});
  });
});

// -------------------- Mobile Menu --------------------
const btn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
btn.addEventListener("click", () => {
  const open = btn.classList.toggle("open");
  mobileNav.style.display = open ? "flex" : "none";
});

// -------------------- Rotating Hero Text --------------------
const heroSets = document.querySelectorAll(".hero-set");
let currentIndex = 0;

function cycleHeroText(){
  heroSets[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % heroSets.length;
  heroSets[currentIndex].classList.add("active");
}

setInterval(cycleHeroText,7000);
