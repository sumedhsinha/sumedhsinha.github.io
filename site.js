// Shared by every page: footer year + dark mode toggle + ?preview
// Add ?preview to any URL to show elements marked data-hidden (outlined in orange)
if (new URLSearchParams(location.search).has("preview")) document.documentElement.classList.add("show-hidden");

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme
        ? root.dataset.theme === "dark"
        : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
});
