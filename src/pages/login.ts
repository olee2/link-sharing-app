import { authenticateUser } from "../api/authenticateUser";

const form = document.getElementById("login-form") as HTMLFormElement;
const email = document.getElementById("email") as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const body = { email: email.value, password: password.value };

  try {
    await authenticateUser(body);
  } catch (error) {
    console.error(error);
  }
});

//   email: "admin@example.com",
//   password: "verysecret"
