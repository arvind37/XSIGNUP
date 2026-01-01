const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");

const dismissBtn = document.querySelector(".dismiss-btn");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ✅ FORM SUBMIT (index.html)
if (form) {
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

    window.location.href = `success.html?email=${encodeURIComponent(email)}`;
  });
}

// ✅ DISMISS BUTTON (success.html)
if (dismissBtn) {
  dismissBtn.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}
