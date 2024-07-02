document.addEventListener("DOMContentLoaded", function() {
    // Main Slider
    const mainSlider = document.querySelector(".main_slider.gallery-slider");
    const mainSlides = mainSlider.querySelectorAll(".main_slider_slide");
    const mainDots = document.querySelectorAll(".main_slider_dot");
    const mainPrevSlideBtn = document.querySelector(".main_slider .prev-slide");
    const mainNextSlideBtn = document.querySelector(".main_slider .next-slide");
    let mainCurrentSlide = 0;

    function showMainSlide(index) {
        mainSlides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });

        // Toggle previous and next slide buttons
        mainPrevSlideBtn.classList.toggle('inactive', index === 0);
        mainNextSlideBtn.classList.toggle('inactive', index === mainSlides.length - 1);

        // Toggle active and inactive dots
        mainDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Show initial slide
    showMainSlide(mainCurrentSlide);

    // Event listener for previous slide button
    mainPrevSlideBtn.addEventListener("click", function() {
        if (mainCurrentSlide > 0) {
            mainCurrentSlide--;
            showMainSlide(mainCurrentSlide);
        }
    });

    // Event listener for next slide button
    mainNextSlideBtn.addEventListener("click", function() {
        if (mainCurrentSlide < mainSlides.length - 1) {
            mainCurrentSlide++;
            showMainSlide(mainCurrentSlide);
        }
    });

    // Event listener for dots
    mainDots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            mainCurrentSlide = index;
            showMainSlide(mainCurrentSlide);
        });
    });

    // Gallery Slider
    const gallerySlider = document.querySelector(".section-gallery .gallery-slider.down_slider");
    const gallerySlides = gallerySlider.querySelectorAll(".slide");
    const galleryPrevSlideBtn = document.querySelector(".down_slider .prev-slide");
    const galleryNextSlideBtn = document.querySelector(".down_slider .next-slide");
    const gallerySlideInfo = gallerySlider.querySelectorAll(".slide-info p");
    let galleryCurrentSlide = 0;

    function showGallerySlide(index) {
        gallerySlides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
            gallerySlideInfo[i].style.display = i === index ? "block" : "none";
        });

        // Toggle previous and next slide buttons
        galleryPrevSlideBtn.classList.toggle('inactive', index === 0);
        galleryNextSlideBtn.classList.toggle('inactive', index === gallerySlides.length - 1);
    }

    // Show initial slide
    showGallerySlide(galleryCurrentSlide);

    // Event listener for previous slide button
    galleryPrevSlideBtn.addEventListener("click", function() {
        if (galleryCurrentSlide > 0) {
            galleryCurrentSlide--;
            showGallerySlide(galleryCurrentSlide);
        }
    });

    // Event listener for next slide button
    galleryNextSlideBtn.addEventListener("click", function() {
        if (galleryCurrentSlide < gallerySlides.length - 1) {
            galleryCurrentSlide++;
            showGallerySlide(galleryCurrentSlide);
        }
    });
});
