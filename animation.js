//Image + Map reveal
       let tracker = document.querySelector("#tracker");
       let scrollTop = 0;
       

        function updateTracker() {
          // console.log(window.innerHeight);
          // console.log(document.documentElement.scrollTop);
          // console.log(document.querySelector('img').offsetTop);

          if (
            document.querySelectorAll("img")[0].offsetTop <
            window.innerHeight + document.documentElement.scrollTop
          ) {
            document.querySelectorAll("img")[0].classList.remove("hidden");
          } else {
            document.querySelectorAll("img")[0].classList.add("hidden");
          }

          if (
            document.querySelectorAll("img")[1].offsetTop <
            window.innerHeight + document.documentElement.scrollTop
          ) {
            document.querySelectorAll("img")[1].classList.remove("hidden");
          } else {
            document.querySelectorAll("img")[1].classList.add("hidden");
          }

          if (
            document.querySelectorAll("img")[2].offsetTop <
            window.innerHeight + document.documentElement.scrollTop
          ) {
            document.querySelectorAll("img")[2].classList.remove("hidden");
          } else {
            document.querySelectorAll("img")[2].classList.add("hidden");
          }

          if (
            document.querySelectorAll("img")[3].offsetTop <
            window.innerHeight + document.documentElement.scrollTop
          ) {
            document.querySelectorAll("img")[3].classList.remove("hidden");
          } else {
            document.querySelectorAll("img")[3].classList.add("hidden");
          }

          if (
            document.querySelectorAll("img")[4].offsetTop <
            window.innerHeight + document.documentElement.scrollTop
          ) {
            document.querySelectorAll("img")[4].classList.remove("hidden");
          } else {
            document.querySelectorAll("img")[4].classList.add("hidden");
          }

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
