export class Quiz {
    #quizName
    #questions
    #score

    constructor(quizName, questions) {
        this.#quizName = quizName
        this.#questions = questions
        this.#score = 0
    }
}