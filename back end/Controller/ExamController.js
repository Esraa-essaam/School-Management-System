const Exam = require("../models/Exam");

const createExam = async (req, res, next) => {
    try {
        const { title, description, course, teacher, startTime, endTime, durationInMinutes, totalGrade, questions } = req.body;

        const newExam = await Exam.create({
            title,
            description,
            course,
            teacher,
            startTime,
            endTime,
            durationInMinutes,
            totalGrade,
            questions
        });

        return res.status(201).json({
            success: true,
            message: "Exam created successfully",
            data: newExam
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getAllExams = async (req, res, next) => {
    try {
        const { courseId } = req.query;
        const filter = courseId ? { course: courseId } : {};

        const exams = await Exam.find(filter)
            .populate("course", "title")
            .populate("teacher", "name");

        return res.status(200).json({
            success: true,
            results: exams.length,
            data: exams
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getExamById = async (req, res, next) => {
    try {
        const exam = await Exam.findById(req.params.id)
            .populate("course", "title")
            .populate("teacher", "name");

        if (!exam) {
            return res.status(404).json({
                success: false,
                message: "Exam not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: exam
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const updateExam = async (req, res, next) => {
    try {
        const updatedExam = await Exam.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedExam) {
            return res.status(404).json({
                success: false,
                message: "Exam not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Exam updated successfully",
            data: updatedExam
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const deleteExam = async (req, res, next) => {
    try {
        const exam = await Exam.findByIdAndDelete(req.params.id);

        if (!exam) {
            return res.status(404).json({
                success: false,
                message: "Exam not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Exam deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createExam,
    getAllExams,
    getExamById,
    updateExam,
    deleteExam
};