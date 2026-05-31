import { Quiz } from "./quizData.js";

export class Question {
    #questionName
    #options
    #answer

    constructor(questionName, options, answer) {
        this.#questionName = questionName
        this.#options = options
        this.#answer = answer
    }

    get questionName() {
        return this.#questionName
    }

    get options() {
        return this.#options
    }

    get answer() {
        return this.#answer
    }

    toJSON() {
        return {
            questionName: this.#questionName,
            options: this.#options,
            answer: this.#answer
        }
    }
}

// make it as class instance
export function makeInstance(quizArray) {
    return quizArray.map(
        quiz => {
            const questions = quiz.questions.map(
                question => new Question(question.questionName, question.options, question.answer)
            )
            return new Quiz(quiz.name, questions)
        }
    )
}