const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");
  } else if (scrollposition <= 60) {
    nav.classList.remove("nav-dark");
  }
});

// * Navbar links active state on scroll
// */
let navlinks = select("#navbar .scrollto", true);
const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navlinks.forEach((navlink) => {
    if (!navlink.hash) return;
    let section = select(navlink.hash);
    if (!section) return;
    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      navlink.classList.add("active");
    } else {
      navlink.classList.remove("active");
    }
  });
};
window.addEventListener("load", navbarlinksActive);
onscroll(document, navbarlinksActive);
