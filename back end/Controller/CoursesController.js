const Course = require("../models/Courses");

const createCourse = async (req, res, next) => {
    try {
        const { title, description, academicYear, teacher } = req.body;

        const newCourse = await Course.create({
            title,
            description,
            academicYear,
            teacher
        });

        return res.status(201).json({
            success: true,
            message: "Course created successfully ",
            data: newCourse
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getAllCourses = async (req, res, next) => {
    try {
        const courses = await Course.find().populate("teacher", "name email");
        
        return res.status(200).json({
            success: true,
            results: courses.length,
            data: courses
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getCourseById = async (req, res, next) => {
    try {
        const course = await Course.findById(req.params.id)
            .populate("teacher", "name email")
            .populate("students", "name email");

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: course
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const updateCourse = async (req, res, next) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedCourse) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Course updated successfully",
            data: updatedCourse
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const deleteCourse = async (req, res, next) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Course deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
};