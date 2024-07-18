document.addEventListener("DOMContentLoaded", function() {
    // Scroll Reveal Slider
    function initScrollRevealSlider() {
        const sliderSection = document.querySelector('.slider-section');
        const preContainer = document.querySelector('.main_slider-pre-container');
        const leftContent = document.querySelector('.main_slider-pre-left-content');
        const imageContainer = document.querySelector('.main_slider-pre-image-container');
        const bgImage = imageContainer.querySelector('img');
        const mainSlider = document.querySelector('.main_slider.section-gallery');
        const revealImage = document.querySelector('.reveal-image');

        let imageRevealed = false;

        window.addEventListener('scroll', function() {
            const rect = sliderSection.getBoundingClientRect();
            const progress = -rect.top / (rect.height - window.innerHeight);

            if (rect.top < 300) {
                imageContainer.style.display = 'block';
                leftContent.style.display = 'block';
                leftContent.style.top = `${rect.top + 500}px`;
            } else {
                imageContainer.style.display = 'none';
                leftContent.style.display = 'none';
            }

            if (progress >= 0 && progress <= 1) {
                // Image animation
                const newTop = Math.min(50 + progress * 50, 100);
                imageContainer.style.top = `${newTop}%`;
                bgImage.style.opacity = 0.5 + progress * 0.5;

                // Reveal/hide main slider image
                if (progress >= 0.5 && !imageRevealed) {
                    bgImage.style.opacity = '0';
                    revealImage.style.opacity = '1';
                    imageRevealed = true;
                } else if (progress < 0.5 && imageRevealed) {
                    bgImage.style.opacity = '1';
                    revealImage.style.opacity = '0';
                    imageRevealed = false;
                }

                // Show/hide pre-slider and main slider
                preContainer.style.opacity = Math.max(1 - progress * 2, 0);
                mainSlider.style.opacity = Math.min(progress * 2, 1);
            }
        });
    }

    // Main Slider Functionality
    function initMainSlider() {
        const slider = document.querySelector('.main_slider.gallery-slider');
        const slides = slider.querySelectorAll('.main_slider_slide');
        const dots = document.querySelectorAll('.main_slider_dot');
        const prevBtn = document.querySelector('.prev-slide');
        const nextBtn = document.querySelector('.next-slide');
        let currentSlide = 0;

        const slideImages = {
            0: { 0: './images/2.png', 1: 'https://placehold.co/550x400', 2: 'https://placehold.co/450x400' },
            1: { 0: './images/Dragon.jpg', 1: 'https://placehold.co/540x400', 2: 'https://placehold.co/440x400' },
            2: { 0: './images/DragonTrunk.jpg', 1: 'https://placehold.co/530x400', 2: 'https://placehold.co/430x400' }
        };

        function showSlide(index) {
            console.log('Showing slide:', index);
            slider.style.transform = `translateX(-${index * 100}%)`;
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            prevBtn.classList.toggle('inactive', index === 0);
            nextBtn.classList.toggle('inactive', index === slides.length - 1);

            if (slides[index]) {
                initializeTabs(slides[index]);
            } else {
                console.error('Slide not found at index:', index);
            }
        }

        function initializeTabs(slide) {
            const slideIndex = Array.from(slides).indexOf(slide);
            console.log('Initializing slide:', slideIndex);

            const tabs = slide.querySelectorAll('.information_block_tab');
            const tabContents = slide.querySelectorAll('.information_block_tab_content');
            const tabImage = slide.querySelector('.information_block_right img');

            if (!tabImage) {
                console.error('Image element not found for slide', slideIndex);
                return;
            }

            tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active', 'default-active'));
                    tabContents.forEach(tc => tc.classList.remove('active'));
                    
                    tab.classList.add('active');
                    tabContents[index].classList.add('active');
                    tabImage.src = slideImages[slideIndex][index];
                });

                tab.addEventListener('mouseenter', () => {
                    if (!tab.classList.contains('active')) tab.classList.remove('default-active');
                });

                tab.addEventListener('mouseleave', () => {
                    if (!tab.classList.contains('active')) tab.classList.add('default-active');
                });
            });

            // Set default tab
            tabs[0].click();
        }

        prevBtn.addEventListener('click', () => {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentSlide < slides.length - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });

        // Initialize tabs for all slides
        slides.forEach(initializeTabs);

        // Show initial slide
        showSlide(currentSlide);
    }

    // Gallery Slider Functionality
    function initGallerySlider() {
        const gallerySlider = document.querySelector(".section-gallery .gallery-slider.down_slider");
        if (!gallerySlider) {
            console.error("Gallery slider not found");
            return;
        }

        const gallerySlides = gallerySlider.querySelectorAll(".slide");
        const galleryPrevSlideBtn = document.querySelector(".down_slider .prev-slide");
        const galleryNextSlideBtn = document.querySelector(".down_slider .next-slide");
        const gallerySlideInfo = gallerySlider.querySelectorAll(".slide-info p");
        
        if (!gallerySlides.length || !galleryPrevSlideBtn || !galleryNextSlideBtn || !gallerySlideInfo.length) {
            console.error("One or more gallery elements not found");
            return;
        }

        let galleryCurrentSlide = 0;

        function showGallerySlide(index) {
            gallerySlides.forEach((slide, i) => {
                slide.style.display = i === index ? "block" : "none";
                gallerySlideInfo[i].style.display = i === index ? "block" : "none";
            });

            galleryPrevSlideBtn.classList.toggle('inactive', index === 0);
            galleryNextSlideBtn.classList.toggle('inactive', index === gallerySlides.length - 1);
        }

        showGallerySlide(galleryCurrentSlide);

        galleryPrevSlideBtn.addEventListener("click", function() {
            if (galleryCurrentSlide > 0) {
                galleryCurrentSlide--;
                showGallerySlide(galleryCurrentSlide);
            }
        });

        galleryNextSlideBtn.addEventListener("click", function() {
            if (galleryCurrentSlide < gallerySlides.length - 1) {
                galleryCurrentSlide++;
                showGallerySlide(galleryCurrentSlide);
            }
        });
    }

    // Standalone Tabulation Block
    function initStandaloneInfoBlock() {
        const infoBlock = document.querySelector('.information_block_section.standalone');
        if (!infoBlock) {
            console.error("Standalone information block not found");
            return;
        }

        const tabs = infoBlock.querySelectorAll('.information_block_tab');
        const tabContents = infoBlock.querySelectorAll('.information_block_tab_content');
        const image = infoBlock.querySelector('.information_block_right img');
        const images = [
            'https://placehold.co/600x400',
            'https://placehold.co/450x400',
            'https://placehold.co/550x400'
        ];

        function showTab(index) {
            tabs.forEach((tab, i) => {
                tab.classList.toggle('active', i === index);
            });
            tabContents.forEach((content, i) => {
                content.style.display = i === index ? 'block' : 'none';
            });
            if (image && images[index]) {
                image.src = images[index];
            }
        }

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => showTab(index));
        });

        // Show the first tab by default
        showTab(0);
    }

    // Initialize all components
    initScrollRevealSlider();
    initMainSlider();
    initGallerySlider();
    initStandaloneInfoBlock();
});
