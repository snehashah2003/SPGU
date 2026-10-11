
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (!menuBtn || !navMenu) {
        console.error("Mobile menu elements not found.");
        return;
    }

    menuBtn.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("active");

        menuBtn.setAttribute("aria-expanded", String(isOpen));

        const icon = menuBtn.querySelector("i");

        if (icon) {
            icon.classList.toggle("fa-bars", !isOpen);
            icon.classList.toggle("fa-xmark", isOpen);
        }
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
        });
    });
});
