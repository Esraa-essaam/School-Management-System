const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },
        teacher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        startTime: {
            type: Date,
            required: true
        },
        endTime: {
            type: Date,
            required: true
        },
        durationInMinutes: {
            type: Number,
            required: true
        },
        totalGrade: {
            type: Number,
            required: true
        },
        questions: [
            {
                questionText: {
                    type: String,
                    required: true
                },
                options: [
                    {
                        type: String,
                        required: true
                    }
                ],
                correctAnswer: {
                    type: String,
                    required: true
                },
                points: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;