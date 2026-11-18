const cardNumber = document.querySelector("#card-number");
const expiry = document.querySelector("#expiry");
const form = document.querySelector("#card-form");
const status = document.querySelector("#form-status");

cardNumber.addEventListener("input", () => {
  const digits = cardNumber.value.replace(/\D/g, "").slice(0, 19);
  cardNumber.value = digits.replace(/(.{4})/g, "$1 ").trim();
});

expiry.addEventListener("input", () => {
  const digits = expiry.value.replace(/\D/g, "").slice(0, 4);
  expiry.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Details look good. Connect this form to your payment provider to continue.";
});