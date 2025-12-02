const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navOverlay = document.querySelector(".nav-overlay");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");

    // Lock body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains("active") ? "hidden" : "auto";
});

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        navOverlay.classList.remove("active");
        document.body.style.overflow = "auto"; // unlock scroll
    })
);

navOverlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
});
