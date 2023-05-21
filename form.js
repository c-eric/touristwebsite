      const scriptURL = "https://script.google.com/macros/s/AKfycbyCxDlmFbDK8TaNHr9AwhSG2vzvDI6xARzMiD_Px3JTEnmsJu_FO-SCRdkreai-rJU8/exec";
      const form = document.forms["submit-to-google-sheet"];
      const successMessage = document.querySelector(".js-success-message");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => showSuccessMessage(response))
      });


      function showSuccessMessage(response) {
        console.log("Success!", response);
        setTimeout(() => {
          successMessage.classList.remove("is-hidden");
          //loading.classList.add("is-hidden");
        }, 500);
      }
