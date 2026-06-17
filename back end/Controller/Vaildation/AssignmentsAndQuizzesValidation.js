const joi = require("joi");

const assignmentsAndQuizzesSchema = joi.object({
    title: joi.string().min(3).required().trim(),
    description: joi.string().allow(""),
    type: joi.string().valid("assignment", "quiz").required(),
    course: joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    dueDate: joi.date().required(),
    totalGrade: joi.number().min(0).required(),
    
    questions: joi.array().items(
        joi.object({
            questionText: joi.string().required(),
            options: joi.array().items(joi.string()).min(2), 
            correctAnswer: joi.string().required()
        })
    ).default([]) 
});

module.exports = assignmentsAndQuizzesSchema;