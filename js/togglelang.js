// Query all sections and the language toggle button
let sections = document.querySelectorAll(".section");
let activeSection = "";
let langToggle = document.querySelector("#lang-toggle");

// Function to update the active section based on scroll position
function updateScroll() {
  sections.forEach(function (section) {
    // Update activeSection if section is in the upper half of the viewport
    if (section.offsetTop - document.documentElement.scrollTop < window.innerHeight / 2) {
      activeSection = section.id;
    }
  });
  // Continuously update active section as user scrolls
  requestAnimationFrame(updateScroll);
}

// Initialize scroll update
requestAnimationFrame(updateScroll);

// Handle language toggle click to maintain active section in URL
langToggle.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior
  window.location.href = event.target.href + "#" + activeSection; // Append active section to URL
});