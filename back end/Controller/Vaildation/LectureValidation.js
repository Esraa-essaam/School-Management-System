const joi = require("joi");

const LectureSchema = joi.object({
    title: joi.string().min(3).max(100).required().trim(),
    description: joi.string().required(), 
    VideoUrl: joi.string().uri().required(), 
    meetingLink: joi.string().uri().allow(""), 
    date: joi.date().default(Date.now), 
    course: joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});

module.exports = LectureSchema;