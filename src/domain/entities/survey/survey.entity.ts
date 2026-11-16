import { UUIDAdapter } from "../../../config/uuid.adapter.js";
import type { CreateSurveyDto } from "../../dtos/survey/create.dto.js";
import type { Question } from "./types/Question.js";

export class SurveyEntity {

    id: string;
    title: string;
    description: string;
    questions: Question[];
    authorId: string;
    createdAt: Date;

    constructor(props: CreateSurveyDto) {
        this.id = UUIDAdapter.generateUUID();
        this.title = props.title;
        this.description = props.description;
        this.questions = props.questions;
        this.authorId = props.authorId;
        this.createdAt = new Date();
    }

}