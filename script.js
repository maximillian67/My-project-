// JavaScript for Interactive Neon Sections

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".reveal-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.dataset.target);

      if (target.classList.contains("show")) {
        target.classList.remove("show");
        btn.textContent = "Show Info";
      } else {
        target.classList.add("show");
        btn.textContent = "Hide Info";