/* MOBILE MENU */
const mobileToggle = document.getElementById("mobileToggle");
const mobileNav = document.getElementById("mobileNav");

mobileToggle.addEventListener("click", () => {
  mobileNav.style.display =
    mobileNav.style.display === "flex" ? "none" : "flex";
});

/* HERO TEXT ROTATION */
let index = 1;
const texts = [
  document.getElementById("hero-text-1"),
  document.getElementById("hero-text-2"),
  document.getElementById("hero-text-3")
];

setInterval(() => {
  const current = texts[index - 1];
  current.classList.remove("active");

  index = index === 3 ? 1 : index + 1;

  const next = texts[index - 1];
  setTimeout(() => {
    next.classList.add("active");
  }, 300);
}, 7000);

/* PARALLAX GRADIENT */
document.addEventListener("scroll", () => {
  const scrolled = window.scrollY * 0.15;
  document.querySelector(".hero-gradient").style.transform = `translateY(${scrolled}px)`;
});
