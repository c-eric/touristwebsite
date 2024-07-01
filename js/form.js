// Define the URL of the Google Apps Script that processes form submissions.
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyCxDlmFbDK8TaNHr9AwhSG2vzvDI6xARzMiD_Px3JTEnmsJu_FO-SCRdkreai-rJU8/exec";

// Access the form element that will be submitted to Google Sheets.
const form = document.forms["submit-to-google-sheet"];

// Select the element that will display a success message after form submission.
const successMessage = document.querySelector(".js-success-message");

// Add an event listener to the form for the submit event.
form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  
  // Send the form data to the Google Apps Script using a POST request.
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
    (response) => showSuccessMessage(response) 
  );
});

// Function to handle displaying the success message.
function showSuccessMessage(response) {
  console.log("Success!", response);
  
  // After a short delay, reveal the success message to the user.
  setTimeout(() => {
    successMessage.classList.remove("is-hidden");
  }, 500); // Delay in milliseconds before showing the success message.
}