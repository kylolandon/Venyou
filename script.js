// Fade-in animations
const faders = document.querySelectorAll(".fade-in");
const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
faders.forEach(el => obs.observe(el));


// Parallax background gradient
window.addEventListener("scroll", () => {
  const bg = document.querySelector(".bg-gradient");
  bg.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});


// Mobile menu animation
const btn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

btn.addEventListener("click", () => {
  mobileNav.style.display = mobileNav.style.display === "flex" ? "none" : "flex";
  btn.classList.toggle("open");
});
