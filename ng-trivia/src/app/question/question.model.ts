import { Answer } from "../answer/answer.model";

export class Question {
    // question: string;
    // answers: Answer[];

    constructor(private question: string, private answers: Answer[]) { }

    getQuestion() {
        return this.question;
    }

    getAnswers() {
        return this.answers;
    }
}