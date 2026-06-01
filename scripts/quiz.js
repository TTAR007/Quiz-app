import { Question } from "./data/questionData.js";
import { Quiz, quizArray, makeInstance } from "./data/quizData.js";

quizArray.push(new Quiz("General Knowledge", [
    new Question("What is the capital of France?", ["Paris", "London", "Berlin"], "Paris"),
    new Question("What is the largest planet in our solar system?", ["Earth", "Jupiter", "Saturn"], "Jupiter"),
    new Question("Who wrote 'To Kill a Mockingbird'?", ["Harper Lee", "Mark Twain", "Ernest Hemingway"], "Harper Lee"),
    new Question("What is the tallest mountain in the world?", ["Mount Everest", "K2", "Kangchenjunga"], "Mount Everest"),
    new Question("What is the largest ocean on Earth?", ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean"], "Pacific Ocean")
]))

quizArray.push(new Quiz("Science", [
    new Question("What is the chemical symbol for water?", ["H2O", "CO2", "O2"], "H2O"),
    new Question("What is the speed of light?", ["299,792 km/s", "150,000 km/s", "1,080,000 km/s"], "299,792 km/s"),
    new Question("Who developed the theory of relativity?", ["Isaac Newton", "Albert Einstein", "Nikola Tesla"], "Albert Einstein"),
    new Question("What is the powerhouse of the cell?", ["Nucleus", "Mitochondria", "Ribosome"], "Mitochondria")
]))

quizArray.push(new Quiz("History", [
    new Question("Who was the first President of the United States?", ["George Washington", "Thomas Jefferson", "Abraham Lincoln"], "George Washington"),
    new Question("In which year did World War II end?", ["1945", "1939", "1918"], "1945"),
    new Question("Who was the leader of the Soviet Union during World War II?", ["Joseph Stalin", "Vladimir Lenin", "Leon Trotsky"], "Joseph Stalin"),
    new Question("What ancient civilization built the Machu Picchu?", ["Inca", "Maya", "Aztec"], "Inca")
]))
// don't have adding quiz function yet, so I will add some quizzes here for testing purpose
saveToLocalStorage()

console.log(quizArray)
makeInstance()
console.log(quizArray)

// display all quiz in the index.html page
let quizHTML = ``
quizArray.forEach((quiz) => {
    quizHTML += `
    <li><a class="quiz-link" href="question.html?quiz=${encodeURIComponent(quiz.name)}">${quiz.name}</a></li>
    `
})
document.querySelector(".quiz-container").innerHTML = quizHTML


// local storage functions
function saveToLocalStorage() {
    localStorage.setItem("quizArray", JSON.stringify(quizArray))
}