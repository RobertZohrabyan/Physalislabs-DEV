function openAnswer(number) {
    [...document.getElementsByClassName('open-answer')].forEach(ans => ans.classList.remove('open-answer'));
    document.getElementById(`answer_${number}`).classList.toggle('open-answer');
}