document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.kenji_statistic_tab_tab');
    const tabContents = document.querySelectorAll('.kenji_statistic_tab_tab_content');
    const images = ['./images/Merlin.jpg', './images/MerlinVac.jpg', './images/Dragon.jpg'];

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs and tab contents
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Add 'active' class to the clicked tab and corresponding tab content
            tab.classList.add('active');
            tabContents[index].classList.add('active');

            // Change image based on the clicked tab
            document.querySelector('.kenji_statistic_tab_right img').src = images[index];
        });
    });
});
