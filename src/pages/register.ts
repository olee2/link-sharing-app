import { registerUser } from "../api/registerUser";

const form = document.getElementById("login-form") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
const confirmPassword = document.getElementById(
  "confirm-password"
) as HTMLInputElement;
const toastContainer = document.getElementById("toast-container");

function handleToast() {
  const toast = document.querySelector(".toast");

  let timeLeft = 5;
  if (toast) {
    const countdown = setInterval(() => {
      if (toastContainer) {
        if (timeLeft <= 0) {
          clearTimeout(countdown);
          toastContainer.innerHTML = "";
        } else {
          timeLeft -= 1;
        }
      }
    }, 1000);

    toast.addEventListener("click", () => {
      if (toastContainer) {
        toastContainer.innerHTML = "";
        clearTimeout(countdown);
      }
    });
  }
}

confirmPassword.addEventListener("input", () => {
  // Reset custom validity
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
  handleToast();
});

//   email: "admin@example.com",
//   password: "verysecret"
