import type { Question } from "../../entities/survey/types/Question.js";

interface CreateSurveyDtoProps {
    title: string;
    description: string;
    questions: Question[];
    authorId: string;
}

export class CreateSurveyDto {

    private constructor(
        public readonly title: string,
        public readonly description: string,
        public readonly questions: Question[],
        public readonly authorId: string
    ) { }

    public static create(props: CreateSurveyDtoProps): { dto?: CreateSurveyDto, error?: string } {
        if (!props) return { error: "Properties are required" };

        const { title, description, questions, authorId } = props;

        if (typeof title !== "string" || typeof description !== "string" || typeof authorId !== "string") {
            return { error: "Title, description, and author ID must be strings" };
        }

        if (!title || !description || !questions || !authorId) {
            return { error: "Missing required fields" };
        }

        if(title.trim() === "" || description.trim() === "") {
            return { error: "Title and description cannot be empty" };
        }

        if(!Array.isArray(questions)) {
            return { error: "Questions must be an array" };
        }

        for (const question of questions) {
            if (
                !question ||
                typeof question.id !== "string" ||
                typeof question.questionHeader !== "string" ||
                typeof question.type !== "string" ||
                question.id.trim() === "" ||
                question.questionHeader.trim() === "" ||
                question.type.trim() === ""
            ) {
                return { error: "Each question must have an id, questionHeader, and type" };
            }
        }

        if (!authorId || authorId.trim() === "") {
            return { error: "Author ID cannot be empty" };
        }

        if (questions.length === 0) {
            return { error: "Questions must be a non-empty array" };
        }

        return { dto: new CreateSurveyDto(title, description, questions, authorId) };
    }

}