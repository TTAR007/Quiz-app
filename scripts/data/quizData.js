export let quizArray = []

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
}