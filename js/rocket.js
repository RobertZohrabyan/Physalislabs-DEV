// document.addEventListener("DOMContentLoaded", function() {
//     window.addEventListener('scroll', function() {
//         var bus = document.getElementById('bus');
//         var scrollPosition = window.scrollY;
//         var windowHeight = window.innerHeight;

//         // Adjust the position of the bus based on the scroll position
//         if (scrollPosition > windowHeight / 2) {
//             bus.classList.add('active');
//         } else {
//             bus.classList.remove('active');
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function() {

// Function to add class when user scrolls down
function showLinesOnScroll() {
    var robtSection = document.querySelector('.robot');
    var floatingGraphics = document.querySelector('.floating-graphics');
    var floatingGraphicsRect = floatingGraphics.getBoundingClientRect();

    if (floatingGraphicsRect.top < window.innerHeight * 0.8) {
        robtSection.classList.add('show-lines');
    } else {
        robtSection.classList.remove('show-lines');
    }
}

// Event listener for scroll
window.addEventListener('scroll', showLinesOnScroll);
});