document.addEventListener("DOMContentLoaded", function() {
    const gears = document.querySelectorAll('.cogwheel');
    const infoElements = document.querySelectorAll('.info');
    const modals = document.querySelectorAll('.modal');
    const logoImages = document.querySelectorAll('.infographic-logo');
    const infoTexts = document.querySelectorAll('.info p');

    function handleGearHover(gear, index) {
        // Rotate gear
        gear.style.transform = 'rotate(360deg)';
        // Show modal
        modals[index].style.display = 'block';
        // Show info logo and text
        logoImages[index].classList.add('active');
        infoTexts[index].classList.add('active');
    }

    function handleGearReset(gear, index) {
        // Reset gear rotation
        gear.style.transform = 'rotate(0deg)';
        // Hide modal
        modals[index].style.display = 'none';
        // Hide info logo and text
        logoImages[index].classList.remove('active');
        infoTexts[index].classList.remove('active');
    }

    gears.forEach((gear, index) => {
        // Handle gear hover
        gear.addEventListener('mouseenter', () => {
            handleGearHover(gear, index);
        });
        gear.addEventListener('mouseleave', () => {
            handleGearReset(gear, index);
        });
    });

    infoElements.forEach((info, index) => {
        // Handle info line hover
        info.addEventListener('mouseenter', () => {
            // Rotate corresponding gear
            gears[index].style.transform = 'rotate(360deg)';
            // Show modal
            modals[index].style.display = 'block';
            // Show info logo and text
            logoImages[index].classList.add('active');
            infoTexts[index].classList.add('active');
        });
        info.addEventListener('mouseleave', () => {
            // Reset corresponding gear rotation
            gears[index].style.transform = 'rotate(0deg)';
            // Hide modal
            modals[index].style.display = 'none';
            // Hide info logo and text
            logoImages[index].classList.remove('active');
            infoTexts[index].classList.remove('active');
        });
    });

    modals.forEach((modal, index) => {
        // Hide modal initially
        modal.style.display = 'none';
    });

    logoImages.forEach((logoImage, index) => {
        // Hide logo images initially
        logoImage.style.display = 'none';
    });

    infoTexts.forEach((infoText, index) => {
        // Hide info texts initially
        infoText.style.display = 'none';
    });
});