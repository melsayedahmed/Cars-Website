/* Show Menu */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu Show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Remove Menu Mobile */
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Change Header Background */
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* Popular Swiper */
let popularSwiper = new Swiper(".popular-container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/* Mixitup Filter Featured */
let featuredMixer = mixitup(".featured-content", {
  selectors: {
    target: ".featured-card",
  },
  animation: {
    duration: 300,
  },
});

/* Link Active Featured */
const activeLinkFeatured = document.querySelectorAll(".featured-item");

function activeFeatured() {
  activeLinkFeatured.forEach((link) => {
    link.classList.remove("active-featured");
    this.classList.add("active-featured");
  });
}

activeLinkFeatured.forEach((link) => {
  link.addEventListener("click", activeFeatured);
});

/* Show Scroll Up */
function scrollUp() {
  const scrollUp = document.getElementById("scrollup");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/* Scroll Sections Active Link */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/* Scroll Reveal Animation */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.home-title, .popular-container, .features-img, .featured-filters`);
sr.reveal(`.home-subtitle`, { delay: 500 });
sr.reveal(`.home-elec`, { delay: 600 });
sr.reveal(`.home-img`, { delay: 800 });
sr.reveal(`.home-car-data`, { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(`.home-button`, { delay: 1000, origin: "bottom" });
sr.reveal(`.about-group, .offer-data`, { origin: "left" });
sr.reveal(`.about-data, .offer-img`, { origin: "right" });
sr.reveal(`.features-map`, { delay: 600, origin: "bottom" });
sr.reveal(`.features-card`, { interval: 300 });
sr.reveal(`.featured-card, .logos-content, .footer-content`, { interval: 100 });
