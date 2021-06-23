// Set active nav tab
const navLinks = document.querySelectorAll(".section-nav-link");
const sections = document.querySelectorAll("section");
// half viewport height to be subtracted from section start/end
const halfViewPort = window.innerHeight / 2;
// add element dimensions to links
for (const [index, section] of sections.entries()) {
  navLinks[index].start = section.offsetTop - halfViewPort;
  navLinks[index].end = section.offsetTop + section.offsetHeight - halfViewPort;
}
// listen on scroll
window.addEventListener("scroll", setActiveNav);
// toggle active class when scrollY is within section dimensions
function setActiveNav() {
  const pos = window.scrollY;
  for (const link of navLinks) {
    if (pos >= link.start && pos <= link.end) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  }
}
