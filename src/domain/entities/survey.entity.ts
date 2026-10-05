import { UUIDAdapter } from "../../config/uuid.adapter.js";
import type { CreateSurveyDto } from "../dtos/survey/create.dto.js";

export interface Question {
    id: string;
    text: string;
    type: QuestionType;
    options?: string[];
    correctAnswer?: string | string[] | undefined;
}

export type QuestionType = "text" | "multiple-choice" | "rating";

export interface SurveyResponse {
    surveyId: string;
    answers: Answer[];
}

export interface Answer {
    questionId: string;
    value: string | string[];
}

export class SurveyEntity {

    id: string;
    title: string;
    description: string;
    questions: Question[];
    authorId: string;

    constructor(props: CreateSurveyDto) {
        this.id = UUIDAdapter.generateUUID();
        this.title = props.title;
        this.description = props.description;
        this.questions = props.questions;
        this.authorId = props.authorId;
    }

}