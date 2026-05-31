import { Quiz } from "./data/quizData.js";
import { Question, makeInstance } from "./data/questionData.js";

const param = new URLSearchParams(window.location.search).get('quiz');

let quizParam = param ? decodeURIComponent(param) : null

if (!quizParam) {
    alert("No quiz selected. Redirecting to quiz page.")
    window.location.href = "quiz.html"
}

const quizArray = makeInstance(JSON.parse(localStorage.getItem("quizArray")) || [])

console.log(param)
console.log(quizArray)
// current quiz
const selectedQuiz = quizArray.find(quiz => quiz.name === quizParam)
console.log(selectedQuiz)

//change the title of the page
document.querySelector("h1").textContent = selectedQuiz.name

// display the questions and options
let currentQuestionIndex = 0
displayQuestion()

function displayQuestion() {
    const question = selectedQuiz.questions[currentQuestionIndex]
    document.querySelector("h2").textContent = `${currentQuestionIndex + 1}. ${question.questionName}`

    let optionsHTML = ``
    question.options.forEach((option) => {
        optionsHTML += `
        <label class="option-box">
            <input type="radio" name="q${currentQuestionIndex + 1}" value="${option}"> 
            <span class="option-text">${option}</span>
        </label>
        `
    })
    document.querySelector("form").innerHTML = optionsHTML
}

// wait for the user to select an option and then show "Next button"
const nextButton = document.querySelector(".next-button")

// user's selected option
let selectedOption = null
document.querySelector("form").addEventListener("change", (e) => {
    if (e.target.nodeName === "INPUT") {
        selectedOption = e.target.value
        nextButton.classList.remove("hide")
    }
})

// user's score
let userScore = 0

// next button event listener
nextButton.addEventListener("click", () => {
    const answer = selectedQuiz.questions[currentQuestionIndex].answer
    if (selectedOption === answer) {
        userScore++
    }

    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
        currentQuestionIndex++
        displayQuestion()
        nextButton.classList.add("hide")
        console.log(`User's score: ${userScore}`)
    } else {
        alert(`Quiz completed! Your score: ${userScore}/${selectedQuiz.score}`)
    }
})