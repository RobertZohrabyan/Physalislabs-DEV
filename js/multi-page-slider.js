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
                const newTop = Math.min(50 + progress * 50, 100);
                imageContainer.style.top = `${newTop}%`;
                bgImage.style.opacity = 0.5 + progress * 0.5;

                if (progress >= 0.5 && !imageRevealed) {
                    bgImage.style.opacity = '0';
                    revealImage.style.opacity = '1';
                    imageRevealed = true;
                } else if (progress < 0.5 && imageRevealed) {
                    bgImage.style.opacity = '1';
                    revealImage.style.opacity = '0';
                    imageRevealed = false;
                }

                preContainer.style.opacity = Math.max(1 - progress * 2, 0);
                mainSlider.style.opacity = Math.min(progress * 2, 1);
            }
        });
    }

    // Main Slider Functionality
    function initSlider(sliderSelector, slideImages) {
        const slider = document.querySelector(sliderSelector);
        if (!slider) return;

        const slides = slider.querySelectorAll('.main_slider_slide');
        const dots = slider.querySelectorAll('.main_slider_dot');
        const prevBtn = slider.querySelector('.prev-slide');
        const nextBtn = slider.querySelector('.next-slide');
        let currentSlide = 0;

        function showSlide(index) {
            // Hide all slides
            slides.forEach(slide => slide.style.display = 'none');

            // Show the current slide
            slides[index].style.display = 'block';

            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });

            // Update button states
            prevBtn.classList.toggle('inactive', index === 0);
            nextBtn.classList.toggle('inactive', index === slides.length - 1);

            // Initialize tabs for the current slide
            initializeTabs(slides[index], slideImages[index]);
        }

        function initializeTabs(slide, slideImageSet) {
            const tabs = slide.querySelectorAll('.information_block_tab');
            const tabContents = slide.querySelectorAll('.information_block_tab_content');
            const tabImage = slide.querySelector('.information_block_right img');

            tabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    tabs.forEach(t => t.classList.remove('active', 'default-active'));
                    tabContents.forEach(tc => tc.classList.remove('active'));

                    tab.classList.add('active');
                    tabContents[index].classList.add('active');

                    if (slideImageSet && slideImageSet[index]) {
                        tabImage.src = slideImageSet[index];
                    }

                    const content = tab.getAttribute('data-content');
                    if (content) {
                        tabContents[index].textContent = content;
                    }
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

        // Show the initial slide
        showSlide(currentSlide);
    }

    // Initialize sliders for each page
    const kenjiX1SlideImages = {
         0: { 0: './images/kenji-x1/Kenji-4.jpg', 1: './images/kenji-x1/DSC_0773.jpg', 2: './images/kenji-x1/Graph3.jpg' },
         1: { 0: './images/kenji-x1/plata.PNG', 1: './images/website_images/current-draw.jpg', 2: './images/kenji-x1/duplex-communication.png' },
         2: { 0: './images/kenji-x1/Kenji-1_Tower_Module.jpg', 1: './images/kenji-x1/kenji-tower-modules.png', 2: './video/tower_rotation_smallsize.gif' },
         3: { 0: 'https://placehold.co/440x400', 1: 'https://placehold.co/550x400', 2: 'https://placehold.co/530x400' },
         4: { 0: 'https://placehold.co/550x400', 1: 'https://placehold.co/440x400', 2: 'https://placehold.co/450x400' },
         5: { 0: 'https://placehold.co/550x400', 1: 'https://placehold.co/450x400', 2: 'https://placehold.co/440x400' },
         6: { 0: 'https://placehold.co/440x400', 1: 'https://placehold.co/550x400', 2: 'https://placehold.co/450x400' }
    };
    const geoLabSlideImages = {
        0: { 0: './images/geo-lab/DSC_0750.JPG', 1: './images/geo-lab/2.png', 2: './images/geo-lab/3.png' },
        1: { 0: './images/geo-lab/4.png', 1: './images/geo-lab/5.png', 2: './images/geo-lab/6.png' }
    };
    const torchSlideImages = {
        0: { 0: './images/torch/1.png', 1: './images/torch/2.png', 2: './images/torch/3.png' },
        1: { 0: './images/torch/4.png', 1: './images/torch/5.png', 2: './images/torch/6.png' }
    };
    const roboDriveSlideImages = {
        0: { 0: './images/robo-drive/1.png', 1: './images/robo-drive/2.png', 2: './images/robo-drive/3.png' },
        1: { 0: './images/robo-drive/4.png', 1: './images/robo-drive/5.png', 2: './images/robo-drive/6.png' }
    };

    initSlider('.kenji-x1-slider', kenjiX1SlideImages);
    initSlider('.geo-lab-slider', geoLabSlideImages);
    initSlider('.torch-slider', torchSlideImages);
    initSlider('.robo-drive-slider', roboDriveSlideImages);

    // Initialize the scroll reveal slider
    initScrollRevealSlider();