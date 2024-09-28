document.addEventListener('DOMContentLoaded', function() {
    (function () {
        let floatingGraphics = document.querySelectorAll('.floating-graphics');

        let rocket = document.querySelector('.robot');

        let triggerStart = window.innerHeight / 5;

        let rocketOffsetTop = rocket.offsetTop;

        let thirdOffsetTop = floatingGraphics.length >= 3 ? floatingGraphics[2].offsetTop : null;

        let fifthOffsetTop = floatingGraphics.length >= 5 ? floatingGraphics[4].offsetTop : null;

        document.addEventListener('scroll', (e) => {
            let scrollY = window.scrollY;

            if (scrollY > (rocketOffsetTop - triggerStart)) {
                floatingGraphics[0].classList.add('active');
            } else {
                floatingGraphics[0].classList.remove('active');
            }

            if (thirdOffsetTop && scrollY > (thirdOffsetTop - triggerStart)) {
                floatingGraphics[2].classList.add('active');
            } else if (floatingGraphics.length >= 3 && floatingGraphics[2]) {
                floatingGraphics[2].classList.remove('active');
            }

            if (fifthOffsetTop && scrollY > (fifthOffsetTop - triggerStart)) {
                floatingGraphics[4].classList.add('active');
            } else if (floatingGraphics.length >= 5 && floatingGraphics[4]) {
                floatingGraphics[4].classList.remove('active');
            }
        });
    }());


    let floatingGraphics = document.querySelectorAll('.floating-graphics');

    let triggerStart = window.innerHeight / 5;

    document.addEventListener('scroll', (e) => {
        let scrollY = window.scrollY;

        floatingGraphics.forEach(function(floatingGraphic) {
            let floatingGraphicOffsetTop = floatingGraphic.offsetTop;

            if (scrollY > (floatingGraphicOffsetTop - triggerStart)) {
                floatingGraphic.classList.add('active');
            } else {
                floatingGraphic.classList.remove('active');
            }
        });
    });



    document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
    let elements = document.querySelectorAll('section.robot .floating-graphics');

    elements.forEach((element) => {
        let elementPosition = element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > elementPosition - window.innerHeight + 100) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
});

});
