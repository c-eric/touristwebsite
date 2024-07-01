// Select the navigation bar element using its "navbar" class
const navigation = document.querySelector(".navbar");
// Get the height of the navigation bar
const navigationHeight = navigation.offsetHeight;
// Calculate the scroll padding by subtracting 25 from the navigation bar's height
const scrollPadding = navigationHeight - 25;

// Set a CSS custom property "--scroll-padding" to the calculated scroll padding value
document.documentElement.style.setProperty(
  "--scroll-padding",
  `${scrollPadding}px`
);