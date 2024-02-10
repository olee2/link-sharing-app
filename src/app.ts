import { authenticateUser } from "./api/authenticateUser";

const main = async () => {
  const user = await authenticateUser({
    email: "admin@example.com",
    password: "verysecret"
  });

  const greeting = document.createElement("h1");
  greeting.textContent = `Hello ${user.first_name} ${user.last_name}`;
  document.body.appendChild(greeting);
};

main();
