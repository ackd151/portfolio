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

// Change greeting lang on timer
const greetings = [
  "Hi",
  "Hallo",
  "Hola",
  "Namaste",
  "Zdravstvuyte",
  "Nǐn hǎo",
  "Salve",
  "Konnichiwa",
  "Ahlan",
  "Anyoung",
  "Shalom",
];
let greetIndex = 0;
const greetSpan = document.getElementById("hello");
const greet = () => {
  greetIndex = ++greetIndex % greetings.length;
  greetSpan.innerText = greetings[greetIndex];
};

setInterval(greet, 3000);
