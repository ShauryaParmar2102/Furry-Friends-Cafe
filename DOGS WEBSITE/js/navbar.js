
document.addEventListener("DOMContentLoaded", function () {

    // Select the hamburger button
    const hamburger = document.querySelector(".hamburger");

    // Select the navigation links
    const navLinks = document.querySelector(".nav-links");

    // Check that both elements exist
    if (!hamburger || !navLinks) {
        return;
    }

    // Listen for clicks on the hamburger button
    hamburger.addEventListener("click", function () {

        // Open or close the navigation menu
        const isOpen = navLinks.classList.toggle("open");

        // Update accessibility information
        hamburger.setAttribute("aria-expanded", String(isOpen));

        // Change the accessibility label
        hamburger.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        // Change the hamburger icon to X when open
        hamburger.textContent = isOpen ? "✕" : "☰";

    });

});
