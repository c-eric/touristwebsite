//Image + Map reveal
let tracker = document.querySelector("#tracker"); // Selects the tracker element by its ID.
let scrollTop = 0; // Initializes a variable to keep track of the scroll position.

function updateTracker() {
  // This function updates the visibility of images based on the scroll position.
  
  // The following commented lines can be used for debugging purposes to understand the calculations involved.
  // console.log(window.innerHeight); // Logs the inner height of the window.
  // console.log(document.documentElement.scrollTop); // Logs the number of pixels the document is scrolled vertically.
  // console.log(document.querySelector('img').offsetTop); // Logs the distance of the first image from the top of the viewport.

  // The next blocks of code check each image's position relative to the viewport and toggle the 'hidden' class accordingly.
  // This is done for the first five images in the document.
  
  // Checks if the first image is visible within the viewport.
  if (
    document.querySelectorAll("img")[0].offsetTop <
    window.innerHeight + document.documentElement.scrollTop
  ) {
    document.querySelectorAll("img")[0].classList.remove("hidden");
  } else {
    document.querySelectorAll("img")[0].classList.add("hidden");
  }

  // Repeats the above process for the second image.
  if (
    document.querySelectorAll("img")[1].offsetTop <
    window.innerHeight + document.documentElement.scrollTop
  ) {
    document.querySelectorAll("img")[1].classList.remove("hidden");
  } else {
    document.querySelectorAll("img")[1].classList.add("hidden");
  }

  // Repeats the above process for the third image.
  if (
    document.querySelectorAll("img")[2].offsetTop <
    window.innerHeight + document.documentElement.scrollTop
  ) {
    document.querySelectorAll("img")[2].classList.remove("hidden");
  } else {
    document.querySelectorAll("img")[2].classList.add("hidden");
  }

  // Repeats the above process for the fourth image.
  if (
    document.querySelectorAll("img")[3].offsetTop <
    window.innerHeight + document.documentElement.scrollTop
  ) {
    document.querySelectorAll("img")[3].classList.remove("hidden");
  } else {
    document.querySelectorAll("img")[3].classList.add("hidden");
  }

  // Repeats the above process for the fifth image.
  if (
    document.querySelectorAll("img")[4].offsetTop <
    window.innerHeight + document.documentElement.scrollTop
  ) {
    document.querySelectorAll("img")[4].classList.remove("hidden");
  } else {
    document.querySelectorAll("img")[4].classList.add("hidden");
  }

  // Repeats the above process for the map.
  if (
    document.querySelector("#map").offsetTop <
    window.innerHeight + document.documentElement.scrollTop
  ) {
    document.querySelector("#map").classList.remove("hidden");
  } else {
    document.querySelector("#map").classList.add("hidden");
  }
  requestAnimationFrame(updateTracker);
}

requestAnimationFrame(updateTracker);
