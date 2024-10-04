let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Menu toggle
let menuIcon = document.querySelector(".menu-icon i");
let navLinks = document.querySelector(".nav-links");

// Function to toggle the menu
const toggleMenu = () => {
  menuIcon.classList.toggle("fa-xmark"); // Toggle the icon
  navLinks.classList.toggle("open"); // Toggle the visibility of nav links
};

// Toggle menu on icon click
menuIcon.addEventListener("click", toggleMenu);

// Close menu when a nav link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    // Close the menu
    menuIcon.classList.remove("fa-xmark"); // Change icon back
    navLinks.classList.remove("open"); // Hide the nav links
  });
});

// ===============port menu==================//

let portHead = document.querySelector(".port-head");
let portMenu = document.querySelector(".port-menu");
let portBtn = document.querySelectorAll(".port-btn");

// Function to toggle the menu and button display
const toggleMenuButtons = () => {
  const isOpen = portMenu.classList.toggle("open-port"); // Toggles the menu open/close

  // Toggle button visibility based on the menu state
  portBtn.forEach((evt) => {
    evt.classList.toggle("port-btn-display", isOpen);
  });
};

// Click event for the portHead to toggle the menu and buttons
portHead.addEventListener("click", toggleMenuButtons);

// Click event for each port button
portBtn.forEach((evt) => {
  evt.addEventListener("click", () => {
    portMenu.classList.toggle("open-port");
    // This line is optional if you want the buttons to close the menu as well
    portBtn.forEach((button) => button.classList.remove("port-btn-display"));
  });
});
