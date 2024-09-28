// function openAnswer(number) {
//     [...document.getElementsByClassName('open-answer')].forEach(ans => ans.classList.remove('open-answer'));
//     document.getElementById(`answer_${number}`).classList.toggle('open-answer');
// }
    function openAnswer(number) {
        // Close all other answers
        [...document.getElementsByClassName('answer')].forEach((ans, index) => {
            if (ans.id !== `answer_${number}`) {
                ans.classList.remove('open-answer');
                ans.previousElementSibling.querySelector('.addanswer').style.display = 'inline';
                ans.previousElementSibling.querySelector('.removeanswer').style.display = 'none';
            }
        });

        // Toggle the selected answer
        const answer = document.getElementById(`answer_${number}`);
        answer.classList.toggle('open-answer');

        // Toggle the icons
        const isOpen = answer.classList.contains('open-answer');
        answer.previousElementSibling.querySelector('.addanswer').style.display = isOpen ? 'none' : 'inline';
        answer.previousElementSibling.querySelector('.removeanswer').style.display = isOpen ? 'inline' : 'none';
    }
