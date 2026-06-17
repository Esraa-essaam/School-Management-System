const joi = require("joi");

const courseSchema = joi.object({
    title: joi.string().min(3).max(100).required().trim(),
    description: joi.string().min(10).required(),
    academicYear: joi.string().required(),
    teacher: joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
    students: joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/)),
    status: joi.string().valid("active", "inactive").default("active")
});

module.exports = courseSchema;