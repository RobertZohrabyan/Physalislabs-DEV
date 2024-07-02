document.addEventListener("DOMContentLoaded", function() {
    const dots = document.querySelectorAll(".kenjix1_point_dot");
    const callouts = document.querySelectorAll(".kenjix1_point_dot_callout");

    let activeDot = null; // Variable to store the active dot

    dots.forEach((dot, index) => {
        dot.addEventListener("mouseenter", function() {
            // Show corresponding callout
            callouts[index].style.display = "block";
            
            // Check if dot is not active
            if (!dot.classList.contains("is-active")) {
                // Reset border color of corresponding callout
                callouts[index].style.borderColor = "#fff";
            }
        });

        dot.addEventListener("mouseleave", function() {
            // Hide corresponding callout only if it's not the active one
            if (!dot.classList.contains("is-active")) {
                callouts[index].style.display = "none";
            }
        });

        dot.addEventListener("click", function() {
            // Hide all callouts
            callouts.forEach(callout => {
                callout.style.display = "none";
                callout.style.borderColor = "#fff"; // Reset border color of all callouts
            });
            
            // Show corresponding callout
            callouts[index].style.display = "block";

            // Reset color of previously clicked dot and callout
            if (activeDot) {
                activeDot.classList.remove("is-active");
                activeDot.classList.remove("is-clicked");
                const activeCalloutIndex = parseInt(activeDot.dataset.callout) - 1;
                if (activeCalloutIndex >= 0 && activeCalloutIndex < callouts.length) {
                    callouts[activeCalloutIndex].style.borderColor = "#fff"; // Reset border color of previous callout
                }
            }

            // Change color of the clicked dot and border color of all callouts
            dot.classList.add("is-active");
            dot.classList.add("is-clicked");
            activeDot = dot; // Update active dot
            callouts.forEach(callout => {
                callout.style.borderColor = "#ADD8E6"; // Change border color of all callouts
            });
        });
    });

    // Trigger click event on the first left dot to make it default active
    dots[0].click();
});
