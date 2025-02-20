const scrollTop = document.querySelector(".scroll");

document.addEventListener("scroll", () => {
  const scollTopValue = document.documentElement.scrollTop;
  if (scollTopValue > 20) {
    scrollTop.style.display = "block";
  }else{
    scrollTop.style.display = "none";
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
