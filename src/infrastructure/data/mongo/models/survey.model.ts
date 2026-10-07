import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    questions: {
        type: [
            {
                id: { type: String, required: true },
                text: { type: String, required: true },
                type: { type: String, required: true },
                options: { type: [String], required: false },
                correctAnswer: { type: [String], required: false }
            }
        ],
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    }
});

export const SurveyModel = mongoose.model("Survey", surveySchema);