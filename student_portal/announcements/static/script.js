// Simple greeting update based on time of day
window.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.getElementById("greeting");
  if (!greetingElement) return;

  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning, Student ☀️";
  } else if (hour < 18) {
    greeting = "Good afternoon, Student 👋";
  } else {
    greeting = "Good evening, Student 🌙";
  }

  greetingElement.textContent = greeting;
});
