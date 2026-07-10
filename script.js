const tg = window.Telegram.WebApp;

tg.ready();
tg.expand();

// Splash
setTimeout(() => {
  const splash = document.getElementById("splash");
  const app = document.getElementById("app");
  if (splash) splash.style.display = "none";
  if (app) app.style.display = "block";
}, 2000);

// Navigation
function showPage(id) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(id);
  if (page) page.classList.add("active");
}

// Telegram User
const user = tg.initDataUnsafe.user;

if (user) {
  document.getElementById("profileName").innerText =
    `${user.first_name || ""} ${user.last_name || ""}`;

  document.getElementById("profileUsername").innerText =
    "@" + (user.username || "No Username");

  document.getElementById("profileId").innerText =
    "NEXO-" + user.id;

  document.getElementById("profileReferral").innerText =
    "REF" + user.id;
}

// Coins Demo
let coins = 0;

function watchAd() {
  coins += 20;
  alert("🎉 +20 Coins");
}

function withdraw() {
  const amount = document.getElementById("amount").value;

  if (!amount) {
    alert("Enter amount");
    return;
  }

  alert("Withdrawal request submitted");
}
