export interface Answer {
    questionId: string;
    value: string;
}

interface SubmitSurveyDtoProps {
    surveyId: string;
    answers: Answer[];
}

export class SubmitSurveyDto {

    private constructor(
        public readonly surveyId: string,
        public readonly answers: Answer[]
    ){}

    public static create(props: SubmitSurveyDtoProps): { dto?: SubmitSurveyDto, error?: string } {

        if(!props) return { error: "Properties are required" };

        const { surveyId, answers } = props;

        if(!surveyId || !answers) {
            return { error: "Missing required fields" };
        }

        if (typeof surveyId !== "string" || surveyId.trim() === "") {
            return { error: "Invalid survey ID" };
        }

        if (!Array.isArray(answers) || answers.length === 0) {
            return { error: "Answers must be a non-empty array" };
        }

        for (const answer of answers) {
            if (
                !answer ||
                typeof answer.questionId !== "string" ||
                typeof answer.value !== "string" ||
                answer.questionId.trim() === "" ||
                answer.value.trim() === ""
            ) {
                return { error: "Each answer must have a questionId and value" };
            }
        }

        return {dto: new SubmitSurveyDto(surveyId, answers)};
    }

}