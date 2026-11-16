import type { QuestionType } from "./QuestionType.js";

export interface Question {
    id: string;
    questionHeader: string;
    type: QuestionType;
}