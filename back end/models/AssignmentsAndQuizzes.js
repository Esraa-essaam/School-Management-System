const mongoose = require("mongoose");

const assignmentsAndQuizzesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String
        },
        type: {
            type: String,
            enum: ["assignment", "quiz"],
            required: true
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true
        },
        dueDate: {
            type: Date,
            required: true
        },
        totalGrade: {
            type: Number,
            required: true
        },
        questions: [
            {
                questionText: { type: String },
                options: [{ type: String }],
                correctAnswer: { type: String }
            }
        ]
    },
    { timestamps: true }
);

const AssignmentsAndQuizzes = mongoose.model("AssignmentsAndQuizzes", assignmentsAndQuizzesSchema);

module.exports = AssignmentsAndQuizzes;