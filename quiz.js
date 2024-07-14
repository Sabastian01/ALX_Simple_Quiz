// JavaScript function to check the answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Retrieve the selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // Check if an answer is selected
    if (userAnswer) {
        // Compare user's answer with correct answer
        if (userAnswer.value === correctAnswer) {
            // If correct
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            // If incorrect
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
