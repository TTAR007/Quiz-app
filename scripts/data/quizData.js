import { Question } from "./questionData.js";

export let quizArray = JSON.parse(localStorage.getItem("quizArray")) || []

export class Quiz {
    #name
    #questions
    #score

    constructor(name, questions) {
        this.#name = name
        this.#questions = questions
        this.#score = this.#questions.length
    }

    get name() {
        return this.#name
    }

    get questions() {
        return this.#questions
    }

    get score() {
        return this.#score
    }

    toJSON() {
        return {
            name: this.#name,
            questions: this.#questions,
            score: this.#score
        }
    }
}

// make it as class instance
export function makeInstance() {
    quizArray = quizArray.map(
        quiz => {
            const questions = quiz.questions.map(
                question => new Question(question.questionName, question.options, question.answer)
            )
            return new Quiz(quiz.name, questions)
        }
    )
}