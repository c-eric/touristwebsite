            let sections = document.querySelectorAll(".section");
            let activeSection = "";

            let langToggle = document.querySelector("#lang-toggle");

            function updateScroll() {
              sections.forEach(function (section) {
                // figure out section is within my 1/2 page
                if (
                  section.offsetTop - document.documentElement.scrollTop <
                  window.innerHeight / 2
                ) {
                  activeSection = section.id;
                }
              });

              requestAnimationFrame(updateScroll);
            }

            requestAnimationFrame(updateScroll);

            langToggle.addEventListener("click", function (event) {
              event.preventDefault();
              window.location.href = event.target.href + "#" + activeSection;
            });
