// Function to change main image on click
function changeImage(element) {
    var mainImage = document.getElementById("mainImage");
    var newImageSource = element.getAttribute("data-src");
    mainImage.src = newImageSource;
}

// Function to change main image on hover
function hoverChangeImage(element) {
    var mainImage = document.getElementById("mainImage");
    var newImageSource = element.getAttribute("data-src");
    mainImage.src = newImageSource;
}

// Add event listeners to all thumbnail images to change main image on click and hover
var thumbnails = document.querySelectorAll(".thumbnails img");
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
        changeImage(thumbnail);
    });

    thumbnail.addEventListener("mouseover", function() {
        hoverChangeImage(thumbnail);
    });
});