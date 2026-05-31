export class Question {
    #questionName
    #options
    #answer

    constructor(questionName, options, answer) {
        this.#questionName = questionName
        this.#options = options
        this.#answer = answer
    }
}