const form = document.getElementById("loginForm");
const message = document.getElementById("message");

const correctUsername = "admin";
const correctPassword = "password";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    message.innerHTML = "Login successful";
  } else {
    message.innerHTML = "Incorrect username or password";
  }
});
