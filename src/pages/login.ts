import { authenticateUser } from "../api/authenticateUser";
import { handleToast } from "../utils";

const form = document.getElementById("login-form") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const toastContainer = document.getElementById("toast-container");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const body = { email: email.value, password: password.value };

  try {
    const result = await authenticateUser(body);
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
