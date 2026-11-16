import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
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
                questionHeader: { type: String, required: true },
                type: { type: String, required: true, enum: ["text"] }
            }
        ],
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const SurveyModel = mongoose.model("Survey", surveySchema);