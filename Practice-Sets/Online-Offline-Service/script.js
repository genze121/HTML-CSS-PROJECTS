const onlineServiceStatus = document.querySelector(".online");
const offlineServiceStatus = document.querySelector(".offline");

function updateServiceStatus() {
  if (navigator.onLine) {
    onlineServiceStatus.innerHTML = "✅ You are online";
    onlineServiceStatus.style.display = "block";
    offlineServiceStatus.style.display = "none";
  } else {
    offlineServiceStatus.innerHTML = "🚫 You are offline";
    offlineServiceStatus.style.display = "block";
    onlineServiceStatus.style.display = "none";
  }

  window.addEventListener("online", updateServiceStatus);
  window.addEventListener("offline", updateServiceStatus);
}

updateServiceStatus();
