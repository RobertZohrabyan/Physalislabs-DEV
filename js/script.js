document.addEventListener('DOMContentLoaded', function() {

    const btn = document.getElementById('menu-btn');
    const overlay = document.getElementById('overlay');
    const menu = document.getElementById('mobile-menu');
    const counters = document.querySelectorAll('.counter');
    let scrollStarted = false;

    btn.addEventListener('click', navToggle);
    document.addEventListener('scroll', scrollPage);

    // Add event listener for submenu items in mobile menu
    const mobileMenuItems = document.querySelectorAll('.mobile-main-menu ul li.has-submenu');
    mobileMenuItems.forEach(item => {
        const submenuToggle = item.querySelector('a');
        const submenu = item.querySelector('.submenu');
        if (submenu && submenuToggle) {
            submenuToggle.addEventListener('click', function(event) {
                event.preventDefault();
                item.classList.toggle('open-submenu');
            });

            // Add click event listeners to submenu items
            const submenuItems = submenu.querySelectorAll('li a');
            submenuItems.forEach(submenuItem => {
                submenuItem.addEventListener('click', function(event) {
                    // Allow default behavior (following the link)
                    // Optionally, you can close the mobile menu here
                    navToggle();
                });
            });
        }
    });

    function navToggle() {
        console.log('Menu button clicked');
        btn.classList.toggle('open');
        overlay.classList.toggle('overlay-show');
        document.body.classList.toggle('stop-scrolling');
        menu.classList.toggle('show-menu'); // Toggle the visibility of the mobile menu
    }

    function scrollPage() {
        const scrollPos = window.scrollY;
        if (scrollPos > 100 && !scrollStarted) {
            countUp();
            scrollStarted = true;
        } else if (scrollPos < 100 && scrollStarted) {
            reset();
            scrollStarted = false;
        }
    }

    function countUp() {
        counters.forEach((counter) => {
            counter.innerText = '0';
            const updateCounter = () => {
                const target = +counter.getAttribute('data-target');
                const c = +counter.innerText;
                const increment = target / 100;
                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`;
                    setTimeout(updateCounter, 75);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    }

    function reset() {
        counters.forEach((counter) => (counter.innerHTML = '0'));
    }

    /* menu hide while scrolling */
    let lastScroll = 0;
    const defaultOffset = 200;
    const mobileMenu = document.getElementById('mobile-menu');
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => mobileMenu.classList.contains('hide');
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
            // Scroll down
            mobileMenu.classList.add('hide');
            header.classList.add('hide'); // Optionally hide the main header as well
            console.log('down');
        } else if (scrollPosition() < lastScroll && containHide()) {
            // Scroll up
            console.log('up');
            mobileMenu.classList.remove('hide');
            header.classList.remove('hide'); // Optionally show the main header when scrolling up
        }
        lastScroll = scrollPosition();
    });   

    /* Gallery */
    // JavaScript to handle gallery slider functionality
    const gallerySlider = document.querySelector(".gallery-slider");
    const slides = gallerySlider.querySelectorAll(".gallery-slider-slide");
    const slideInfo = document.querySelector(".gallery-slider-slide-info").querySelectorAll("p");
    const prevSlideBtn = document.querySelector(".prev-slide");
    const nextSlideBtn = document.querySelector(".next-slide");

    let currentSlide = 0;

    // Function to show slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });

        slideInfo.forEach((info, i) => {
            if (i === index) {
                info.style.display = "block";
            } else {
                info.style.display = "none";
            }
        });
    }

    // Show initial slide
    showSlide(currentSlide);

    // Event listener for previous slide button
    prevSlideBtn.addEventListener("click", function () {
        currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
        showSlide(currentSlide);
    });

    // Event listener for next slide button
    nextSlideBtn.addEventListener("click", function () {
        currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
        showSlide(currentSlide);
    });

    /* kenji page slider with tabs block above our mission block */
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

}); // END DOMContentLoaded
