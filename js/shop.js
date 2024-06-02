document.addEventListener("DOMContentLoaded", function() {
    const allHoverImages = document.querySelectorAll('.product-small-img img');
    const imgContainer = document.querySelector('.img-container');
    const progText = document.querySelector(".progText");
    const progress = document.querySelector(".progress");

    let id = 0;

    // Functionality for changing images on thumbnail click
    allHoverImages.forEach((image) => {
        image.addEventListener('click', () => {
            imgContainer.querySelector('img').src = image.src;
        });

        // Additional functionality for changing images on thumbnail hover
        image.addEventListener('mouseover', () => {
            imgContainer.querySelector('img').src = image.src;
        });
    });

    // Progress bar animation function
    function progressBar(percentage){
        progText.innerText = 0;
        let count = 0;

        progress.style.transition = 50 * percentage + "ms";
        progress.style.bottom = percentage - 110 + "%";

        function updateCount(){
            const target = percentage;

            if(count < target){
                count++;
                progText.innerText = count + "%";
                setTimeout(updateCount, 30);
            } else {
                progText.innerText = target + "%";
            }
        }
        updateCount();
    };

    // Run the progress bar initially
    progressBar(id);

    // Add click event to left arrow
    arrLeft.addEventListener('click', () => {
        id--;

        if(id < 0){
            id = data[0].length - 1;
        }
        slider(id);
    });

    // Add click event to right arrow
    arrRight.addEventListener('click', () => {
        id++;

        if(id > data[0].length - 1){
            id = 0;
        }
        slider(id);
    });

    // Slider functionality
    function slider(id){
        img.src = "media/" + data[0][id] + ".png";
        img.classList.add('fade-in');

        setTimeout(() => {
            img.classList.remove('fade-in');
        },850);

        name.innerText = data[1][id];
        price.innerText = data[2][id];
        optionTitle.innerText = data[3][id];

        for(let i = 0; i < data[4][id].length; i++){
            li = document.createElement('li');
            li.innerHTML = data[4][id][i];
            li.classList.add('option');

            if(i == 0){
                optionsList.innerHTML = "";
                li.classList.add('option-active');
            }

            optionsList.appendChild(li);
        }

        bg.style.backgroundImage = "url(media/" + data[6][id] + ".jpg)";
        progressBar(id);
    }
});
