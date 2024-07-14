function checkAnswer(){
    const correctAnswer = "4";

    const selectedValue = document.querySelector('input[name="quiz"]:checked');
    userAnswer = selectedValue.value;


    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done."
        feedback.style.color = "green";
    } else if (correctAnswer != userAnswer) {
        feedback.textContent = "That's incorrect. Try again!"
        feedback.style.color = "red";
    }
}

const submitAnswer = document.getElementById('submit-answer');
submitAnswer.addEventListener('click', checkAnswer); 