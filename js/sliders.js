document.addEventListener("DOMContentLoaded", function() {
    // First Gallery Slider
    const kenjiSlider = document.querySelector(".kenji_page_slider.gallery-slider");
    const kenjiSlides = kenjiSlider.querySelectorAll(".kenji_page_slider_slide");
    const kenjiDots = document.querySelectorAll(".kenji_page_slider.kenji_page_slider_dot");
    const kenjiPrevSlideBtn = document.querySelector(".kenji_page_slider.prev-slide");
    const kenjiNextSlideBtn = document.querySelector(".kenji_page_slider.next-slide");
    let kenjiCurrentSlide = 0;

    function showKenjiSlide(index) {
        kenjiSlides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });

        // Toggle previous and next slide buttons
        if (index === 0) {
            kenjiPrevSlideBtn.classList.add('inactive');
        } else {
            kenjiPrevSlideBtn.classList.remove('inactive');
        }

        if (index === kenjiSlides.length - 1) {
            kenjiNextSlideBtn.classList.add('inactive');
        } else {
            kenjiNextSlideBtn.classList.remove('inactive');
        }

        // Toggle active and inactive dots
        kenjiDots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Show initial slide
    showKenjiSlide(kenjiCurrentSlide);

    // Event listener for previous slide button
    kenjiPrevSlideBtn.addEventListener("click", function() {
        if (kenjiCurrentSlide > 0) {
            kenjiCurrentSlide--;
            showKenjiSlide(kenjiCurrentSlide);
        }
    });

    // Event listener for next slide button
    kenjiNextSlideBtn.addEventListener("click", function() {
        if (kenjiCurrentSlide < kenjiSlides.length - 1) {
            kenjiCurrentSlide++;
            showKenjiSlide(kenjiCurrentSlide);
        }
    });

    // Second Gallery Slider
    const gallerySlider = document.querySelector(".section-gallery .gallery-slider.kenji_down_slider");
    const gallerySlides = gallerySlider.querySelectorAll(".slide");
    const galleryPrevSlideBtn = document.querySelector(".kenji_down_slider .prev-slide");
    const galleryNextSlideBtn = document.querySelector(".kenji_down_slider .next-slide");
    const gallerySlideInfo = gallerySlider.querySelector(".slide-info").querySelectorAll("p");
    let galleryCurrentSlide = 0;

    function showGallerySlide(index) {
        gallerySlides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
                gallerySlideInfo[i].style.display = "block"; // Show slide info for current slide
            } else {
                slide.style.display = "none";
                gallerySlideInfo[i].style.display = "none"; // Hide slide info for other slides
            }
        });

        // Toggle previous and next slide buttons
        if (index === 0) {
            galleryPrevSlideBtn.classList.add('inactive');
        } else {
            galleryPrevSlideBtn.classList.remove('inactive');
        }

        if (index === gallerySlides.length - 1) {
            galleryNextSlideBtn.classList.add('inactive');
        } else {
            galleryNextSlideBtn.classList.remove('inactive');
        }
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
