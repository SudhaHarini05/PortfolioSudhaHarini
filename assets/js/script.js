// Dynamic Current Year

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;

// Active Navigation

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 160;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Close Mobile Navbar After Clicking a Link

const navbarCollapse = document.getElementById("portfolioNavbar");

const mobileNavLinks = document.querySelectorAll("#portfolioNavbar .nav-link");

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const collapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

    collapse.hide();
  });
});

// Scroll To Top

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Theme Toggle

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const isLightTheme = document.body.classList.contains("light-theme");

  if (isLightTheme) {
    themeIcon.classList.remove("bi-moon-fill");
    themeIcon.classList.add("bi-sun-fill");

    localStorage.setItem("theme", "light");
  } else {
    themeIcon.classList.remove("bi-sun-fill");
    themeIcon.classList.add("bi-moon-fill");

    localStorage.setItem("theme", "dark");
  }
});

// Load Saved Theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");

  themeIcon.classList.remove("bi-moon-fill");
  themeIcon.classList.add("bi-sun-fill");
}
