      const scriptURL = "https://script.google.com/macros/s/AKfycbwzkZ_hxZVwoSyPTDeDodokXcPC44LGJgk_Kmdc3mHbsciZIACjhpUipjuKJlTRKHJQ/exec";
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
