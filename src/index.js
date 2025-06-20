function generatePoem(event) {
  event.preventDefault();

  const inputElement = document.querySelector(".instructions");
  const topic = inputElement.value.trim();

  const poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "";

  const poem = [
    `Oh ${topic}, you shine so bright,`,
    "Dancing softly in the moon’s own light.",
    "In whispered winds your name is heard,",
    "As nature hums its gentle word.",
    "",
    `${topic}, your beauty can’t be caught,`,
    "But in this verse, I’ve gently sought.",
  ];

  new Typewriter(poemElement, {
    strings: poem,
    autoStart: true,
    delay: 25,
    cursor: "",
  });
}

const poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
