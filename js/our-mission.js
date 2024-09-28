document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".kenji_mission_block_tab");
    const tabContents = document.querySelectorAll(".kenji_mission_block_right .tab");

    // Hide all tab contents except the first one
    tabContents.forEach((content, index) => {
        if (index !== 0) {
            content.style.display = "none";
        }
    });

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            // Remove 'active' class from all tabs
            tabs.forEach((t) => t.classList.remove("active"));
            // Add 'active' class to the clicked tab
            tab.classList.add("active");

            // Hide all tab contents
            tabContents.forEach((content) => {
                content.style.display = "none";
            });

            // Display the corresponding tab content
            tabContents[index].style.display = "block";
        });
    });
});