import mongoose from "mongoose";

const surveyResponseSchema = new mongoose.Schema({
    surveyId: {
        type: String,
        required: true
    },
    answers: {
        type: [
            {
                questionId: { type: String, required: true },
                value: { type: String, required: true }
            }
        ],
        required: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

export const SurveyResponseModel = mongoose.model("SurveyResponse", surveyResponseSchema);
