const joi = require("joi")

const examSchema = joi.object({
    title:joi.string(),
    description:joi.string(),
    course:joi.string(),
    teacher:joi.string(),
    startTime:joi.string(),
    endTime:joi.string(),
    durationInMinutes:joi.string(),
    totalGrade:joi.string(),



    questions: joi.array().items(
            joi.object({
                questionText: joi.string().required(),
                options: joi.array().items(joi.string()).min(2), 
                correctAnswer: joi.string().required()
            })
        ).default([]) 
    });

    module.exports = examSchema