import type { SurveyEntity, SurveyResponse } from "../../domain/entities/survey.entity.js";

export const surveys: SurveyEntity[] = [
    {
        id: "1",
        title: "Product Feedback Survey",
        description: "A survey to gather feedback on our products.",
        questions: [
            {
                id: "1",
                text: "What do you like most about our product?",
                type: "text"
            },
            {
                id: "2",
                text: "What improvements would you suggest?",
                type: "text"
            },
            {
                id: "3",
                text: "Would you recommend our product to others?",
                type: "multiple-choice",
                options: ["Yes", "No"],
            }
        ],
        authorId: "qwerty"
    },
];

export const surveyResponses: SurveyResponse[] = []