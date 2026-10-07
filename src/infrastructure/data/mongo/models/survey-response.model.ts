import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
    surveyId: {
        type: String,
        required: true
    },
    answers: {
        type: [Object],
        required: true
    }
});

export const SurveyResponseModel = mongoose.model("SurveyResponse", surveySchema);