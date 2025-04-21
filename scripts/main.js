// main.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");

  // Check for saved user preference
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save user preference
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      localStorage.setItem("darkMode", "disabled");
      toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });

  // Initialize CSS variables polyfill
  if (typeof cssVars === "function") {
    cssVars();
  }
});
