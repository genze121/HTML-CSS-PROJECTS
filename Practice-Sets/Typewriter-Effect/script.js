const textAreaElement = document.querySelector("textarea");

const text =
  "The quick brown fox jumps over the lazy dog. This sentence is often used as a typing exercise because it contains every letter of the English alphabet. Practicing with this sentence can help improve typing speed and accuracy. Beyond its utility, it also serves as a reminder of the beauty and versatility of language. Whether you're learning to type or simply enjoying the rhythm of the words, this phrase has stood the test of time as a classic example of linguistic creativity.";

let i = 0;

function typewriterEffect() {
  if (i < text.length) {
    textAreaElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typewriterEffect, 50);
  }
}

typewriterEffect();
