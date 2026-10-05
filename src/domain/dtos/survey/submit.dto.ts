import type { Answer } from "../../entities/survey.entity.js";

export class SubmitSurveyDto {

    private constructor(
        public readonly surveyId: string,
        public readonly answers: Answer[]
    ){}

    public static create(props: { surveyId: string; answers: Answer[] }): { dto?: SubmitSurveyDto, error?: string } {

        if(!props) return { error: "Properties are required" };

        const { surveyId, answers } = props;

        if (!surveyId || !answers) {
            return { error: "Missing required fields" };
        }

        if(!Array.isArray(answers) || answers.length === 0) {
            return { error: "Answers must be a non-empty array" };
        }

        for (const answer of answers) {
            if (!answer.questionId || !answer.value) {
                return { error: "Each answer must have a questionId and value" };
            }
        }

        return {dto: new SubmitSurveyDto(surveyId, answers)};
    }

}