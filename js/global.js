const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarClose = document.getElementById("sidebarClose");
const overlay = document.getElementById("sidebarOverlay");
const themeToggle = document.getElementById("themeToggle");

window.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark");
        themeToggle.checked = true;
    }

});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

sidebarClose.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

themeToggle.addEventListener("change", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

