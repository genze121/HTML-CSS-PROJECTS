const inputElement = document.querySelector(".palindrome");
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", palindromeChecker);

let str = "madam";
let isPalindrome = false;

function palindromeChecker() {
  const inputData = inputElement.value.trim();
  let reverseStr = "";

  if (inputData.length === 0 || inputData === "") {
    alert("Please enter your text");
    return;
  }

  reverseStr = str.split("").reverse().join("");

  if (inputData === reverseStr) {
    isPalindrome = true;
    alert("This is a Palindrome");
    inputElement.value = "";
  } else {
    isPalindrome = false;
    alert("This is not a Palindrome");
    inputElement.value = "";
  }
}
