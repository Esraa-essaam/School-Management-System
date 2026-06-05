const joi = require("joi");

const RegisterSchema = joi.object({
    name: joi.string().min(8).required(),
    email: joi.string().email().min(12).required(),
    phoneNumber: joi.string().min(11).required(),
    password: joi.string().min(8).required(),
    role: joi.string().valid("student", "teacher", "employee", "admin", "ministry").default("student")
});

const LoginSchema = joi.object({
    email: joi.string().email().min(12).required(),
    password: joi.string().min(8).required()
});

module.exports = {
    RegisterSchema,
    LoginSchema
};