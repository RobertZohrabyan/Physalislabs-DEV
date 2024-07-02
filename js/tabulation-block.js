document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.information_block_tab');
    const tabContents = document.querySelectorAll('.information_block_tab_content');
    const images = ['https://placehold.co/500x500', 'https://placehold.co/550x400', 'https://placehold.co/450x400'];

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
            document.querySelector('.information_block_right img').src = images[index];
        });
    });
});
