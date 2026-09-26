export interface Survey {
    id: string;
    title: string;
    description: string;
    questions: Question[];
}

export interface Question {
    id: string;
    text: string;
    type: "text" | "multiple-choice" | "rating";
    options: string[];
    correctAnswer?: string | string[];
}

export const surveys: Survey[] = [
    {
        id: "1",
        title: "Customer Satisfaction Survey",
        description: "A survey to measure customer satisfaction.",
        questions: [
            {
                id: "1",
                text: "How satisfied are you with our product?",
                type: "rating",
                options: ["1", "2", "3", "4", "5"],
            }
        ]
    },
    {
        id: "2",
        title: "Employee Engagement Survey",
        description: "A survey to assess employee engagement.",
        questions: [
            {
                id: "1",
                text: "How engaged do you feel at work?",
                type: "rating",
                options: ["1", "2", "3", "4", "5"],
            }
        ]
    },
    {
        id: "3",
        title: "Product Feedback Survey",
        description: "A survey to gather feedback on our products.",
        questions: [
            {
                id: "1",
                text: "What do you like most about our product?",
                type: "text",
                options: [],
            },
            {
                id: "2",
                text: "What improvements would you suggest?",
                type: "text",
                options: [],
            },
            {
                id: "3",
                text: "Would you recommend our product to others?",
                type: "multiple-choice",
                options: ["Yes", "No"],
            }
        ]
    },
];