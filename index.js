// Set active nav tab
// const navLinks = document.querySelectorAll(".section-nav-link");
// const sections = document.querySelectorAll("section");
// // half viewport height to be subtracted from section start/end
// const halfViewPort = window.innerHeight / 2;
// // add element dimensions to links
// for (const [index, section] of sections.entries()) {
//   navLinks[index].start = section.offsetTop - halfViewPort;
//   navLinks[index].end = section.offsetTop + section.offsetHeight - halfViewPort;
// }
// // listen on scroll
// window.addEventListener("scroll", setActiveNav);
// // toggle active class when scrollY is within section dimensions
// function setActiveNav() {
//   const pos = window.scrollY;
//   for (const link of navLinks) {
//     if (pos >= link.start && pos <= link.end) {
//       link.classList.add("active");
//     } else {
//       link.classList.remove("active");
//     }
//   }
// }

// close nav menu on link select
const navLinks = document.querySelectorAll(".nav-link");
const navMenuCB = document.getElementById("nav-toggle");
for (const link of navLinks) {
  link.addEventListener("click", () => {
    navMenuCB.checked = false;
  });
}

// Animate name change
window.setTimeout(nameFade, 2900);
function nameFade() {
  const dan = document.getElementById("dan");
  dan.classList.add("dan", "dan-pos");
  const ack = document.getElementById("ack");
  ack.classList.add("ack", "ack-pos");
}

// Animate skills slide-in
const observer = new IntersectionObserver((skills) => {
  skills.forEach((skill) => {
    if (skill.isIntersecting) {
      setTimeout(() => {
        skill.target.classList.add("slide-skill");
      }, Math.floor(Math.random() * 500));
    }
  });
});
const skills = document.querySelectorAll(".skill");
for (const skill of skills) {
  observer.observe(skill);
}
