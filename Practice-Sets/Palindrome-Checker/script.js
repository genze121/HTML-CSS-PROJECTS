const inputElement = document.querySelector(".palindrome");
const buttonElement = document.querySelector("button");

buttonElement.addEventListener("click", palindromeChecker);

let str = "madam";
let isPalindrome = false;

function palindromeChecker() {
  const inputData = inputElement.value;
  let reverseStr = "";

  if (inputData.length === 0 || inputData === "") {
    alert("Please enter your text");
    return;
  }

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str.charAt(i);
  }

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
