const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    navbar.style.transform = "translateY(-100%)"; // Menghilangkan navbar
  } else {
    // Scroll ke atas
    navbar.style.transform = "translateY(0)"; // Menampilkan navbar
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Menghindari nilai negatif pada scrollTop
});

const openSidebarBtn = document.getElementById("openSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");

// Function to open the sidebar
openSidebarBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
});

// Function to close the sidebar
closeSidebarBtn.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full"); // Add the hidden class back
});
