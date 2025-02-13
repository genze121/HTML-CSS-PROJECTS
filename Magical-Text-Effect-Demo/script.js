document.addEventListener("copy", e => {
  e.preventDefault();
  const textContent = "You have been hacked";
  e.clipboardData.setData("text/plain", textContent);
});
