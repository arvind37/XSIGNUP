const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");

const main = document.querySelector(".main");
const successSection = document.querySelector(".thanks-for-sub");
const successText = document.querySelector(".success-text strong");
const dismissBtn = document.querySelector(".dismiss-btn");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!emailRegex.test(email)) {
    errorMsg.textContent = "Valid email required.";
    emailInput.style.borderColor = "rgb(255, 99, 71)";
    emailInput.style.color = "rgb(255, 99, 71)";
    emailInput.style.backgroundColor = "rgba(255, 99, 71, 0.6)";
    return;
  }

  errorMsg.textContent = "";
  emailInput.style.borderColor = "";
  emailInput.style.backgroundColor = "";

  successText.textContent = email;

  main.classList.add("hidden");
  successSection.classList.remove("hidden");
});

dismissBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
