document.addEventListener("copy", event => {
  event.preventDefault();
  const copy = "You are hacked";
  event.clipboardData.setData("text/plain", copy);
});
