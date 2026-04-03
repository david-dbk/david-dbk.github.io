const root = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.classList.remove("dark");
} else {
  root.classList.add("dark");
}

updateThemeIcon();

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    root.classList.toggle("dark");

    const isDark = root.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateThemeIcon();
  });
}

function updateThemeIcon() {
  if (!toggleButton) return;

  const isDark = root.classList.contains("dark");
  toggleButton.textContent = isDark ? "☀" : "☾";
}