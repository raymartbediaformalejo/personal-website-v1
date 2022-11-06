console.log(`gfgslfdjgslfjgsf`);

const yearEl = document.querySelector(`.current-year`);
const currectYear = new Date().getFullYear();
yearEl.textContent = currectYear;

const buttonNavigationEl = document.querySelector(`.btn-mobile-nav`);
const headerel = document.querySelector(`.header`);

buttonNavigationEl.addEventListener("click", function () {
  headerel.classList.toggle("nav-open");
});

const sectionHeroEl = document.querySelector(`.section-hero`);

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) document.body.classList.add("sticky");
  if (entry.isIntersecting) document.body.classList.remove("sticky");
};

const oberver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-80px",
});

oberver.observe(sectionHeroEl);

const mobileNavlinks = document.querySelectorAll(`.main-nav-link`);

mobileNavlinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (link.classList.contains("main-nav-link")) {
      headerel.classList.toggle("nav-open");
    }
  });
});
