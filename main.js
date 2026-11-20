const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navOverlay = document.querySelector(".nav-overlay");

if (hamburger && navMenu) {
    const closeMenu = () => {
        hamburger.classList.remove("active");
        navMenu.classList.add("hidden");
        navMenu.classList.remove("active");
        navOverlay?.classList.remove("active");
        hamburger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    };

    hamburger.addEventListener("click", () => {
        const isOpen = navMenu.classList.contains("hidden") || !navMenu.classList.contains("active");
        hamburger.classList.toggle("active", isOpen);
        navMenu.classList.toggle("hidden", !isOpen);
        navMenu.classList.toggle("active", isOpen);
        navOverlay?.classList.toggle("active", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
        document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    navOverlay?.addEventListener("click", closeMenu);
}
