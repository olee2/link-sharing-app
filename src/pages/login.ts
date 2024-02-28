import { authenticateUser } from "../api/authenticateUser";

const form = document.getElementById("login-form") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;
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
  handleToast();
});

//   email: "admin@example.com",
//   password: "verysecret"