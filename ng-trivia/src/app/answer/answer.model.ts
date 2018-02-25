export class Answer {
    // answer: string;
    // correct: boolean;

    constructor(private answer: string, private correct: boolean) { }

    getAnswer() {
        return this.answer;
    }

    isCorrect() {
        return this.correct;
    }
}