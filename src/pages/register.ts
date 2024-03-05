import { registerUser } from "../api/registerUser";
import { handleToast } from "../utils";

const form = document.getElementById("login-form") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const confirmPassword = document.getElementById(
  "confirm-password"
) as HTMLInputElement;
const toastContainer = document.getElementById("toast-container");

// Reset custom validity on input
confirmPassword.addEventListener("input", () => {
  confirmPassword.setCustomValidity("");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords does not match");
  } else {
    confirmPassword.setCustomValidity("");
  }

  // Force the form to re-check its validation constraints
  form.reportValidity();

  if (!form.checkValidity()) {
    return;
  }

  const body = { email: email.value, password: password.value, active: 1 };

  try {
    const result = await registerUser(body);

    if (toastContainer) {
      toastContainer.innerHTML = `<div class="toast">
      <div class="alert alert-success">
        <span>${result}</span>
      </div>
     </div>`;
    }

    form.reset();
  } catch (error) {
    if (toastContainer) {
      toastContainer.innerHTML = `<div class="toast">
      <div class="alert alert-error">
        <span>${error}</span>
      </div>
     </div>`;
    }
  }
  const toast = document.querySelector(".toast");

  if (toast) {
    handleToast(toast);
  }
});
