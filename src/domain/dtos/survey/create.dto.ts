import { type Question } from "../../entities/survey.entity.js";

export class CreateSurveyDto {

    private constructor(
        public readonly title: string,
        public readonly description: string,
        public readonly questions: Question[],
        public readonly authorId: string
    ) { }

    public static create(props: { title: string; description: string, questions: Question[], authorId: string }): { dto?: CreateSurveyDto, error?: string } {
        if (!props) return { error: "Properties are required" };

        const { title, description, questions, authorId } = props;

        if (
            typeof title !== "string" ||
            title.trim() === "" ||
            typeof description !== "string" ||
            description.trim() === "" ||
            typeof authorId !== "string" ||
            authorId.trim() === ""
        ) {
            return { error: "Required fields cannot be empty" };
        }

        if (!title || !description || !questions || !authorId) return { error: "Missing required fields" };

        if (!Array.isArray(questions) || questions.length === 0) return { error: "Questions must be a non-empty array" };

        if (questions.length < 3) return { error: "A survey must have at least 3 questions" };

        const validTypes = ["text", "multiple-choice", "rating"];

        for (const question of questions) {

            if (!question.id || !question.text || !question.type) return { error: "Each question must have an id, text, and type" };

            if (question.text === '') return { error: "Question text cannot be empty" };

            if (
                (question.type === "multiple-choice" || question.type === "rating") &&
                (!Array.isArray(question.options) || question.options.length === 0)
            ) {
                return { error: "This question type must have options" };
            }

            if (
                question.type === "text" &&
                question.options !== undefined &&
                question.options.length > 0
            ) {
                return { error: "Text questions should not have options" };
            }

            if (!validTypes.includes(question.type)) {
                return { error: "Invalid question type" };
            }

            if (question.options && question.options?.length > 0) {
                if (question.options.length > 5) return { error: "A question can have a maximum of 5 options" };
                for (const option of question.options) {
                    if (typeof option !== "string" || option.trim() === "") {
                        return { error: "Question options cannot be empty" };
                    }
                }
            }

        }

        return { dto: new CreateSurveyDto(title, description, questions, authorId) };
    }

}