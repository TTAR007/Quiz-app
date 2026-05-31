import { makeInstance } from "./data/questionData.js";

const param = new URLSearchParams(window.location.search).get('quiz');

let quizParam = param ? decodeURIComponent(param) : null

if (!quizParam) {
    alert("No quiz selected. Redirecting to quiz page.")
    window.location.href = "quiz.html"
}

const quizArray = makeInstance(JSON.parse(localStorage.getItem("quizArray")) || [])

console.log(param)
console.log(quizArray)
const selectedQuiz = quizArray.find(quiz => quiz.name === quizParam)
console.log(selectedQuiz)