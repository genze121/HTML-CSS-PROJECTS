const spanElement = document.querySelector("span");

const careers = [
  "Full Stack Engineer",
  "Web Developer",
  "Software Engineer",
  "Front Developer",
  "Instructor"
];

let carrerIndex = 0;

let characterIndex = 0;

updateCareer();
function updateCareer() {
  characterIndex++;
  spanElement.innerHTML = `${careers[carrerIndex].slice(0, 1) === "I"
    ? "an"
    : "a"} ${careers[carrerIndex].slice(0, characterIndex)}`;
  if (characterIndex === careers[carrerIndex].length) {
    carrerIndex++;
    characterIndex = 0;
  }

  if (carrerIndex === careers.length) {
    carrerIndex = 0;
  }
  setTimeout(updateCareer, 300);
}
