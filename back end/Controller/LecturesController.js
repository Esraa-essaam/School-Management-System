const Lecture = require("../models/Lecture");

const createLecture = async (req, res, next) => {
    try {
        const { title, description, VideoUrl, meetingLink, date, course } = req.body;

        const newLecture = await Lecture.create({
            title,
            description,
            VideoUrl,
            meetingLink,
            date,
            course
        });

        return res.status(201).json({
            success: true,
            message: "Lecture created successfully",
            data: newLecture
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getAllLectures = async (req, res, next) => {
    try {
        const { courseId } = req.query;
        const filter = courseId ? { course: courseId } : {};

        const lectures = await Lecture.find(filter).populate("course", "title");

        return res.status(200).json({
            success: true,
            results: lectures.length,
            data: lectures
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getLectureById = async (req, res, next) => {
    try {
        const lecture = await Lecture.findById(req.params.id).populate("course", "title");

        if (!lecture) {
            return res.status(404).json({
                success: false,
                message: "Lecture not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: lecture
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const updateLecture = async (req, res, next) => {
    try {
        const updatedLecture = await Lecture.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedLecture) {
            return res.status(404).json({
                success: false,
                message: "Lecture not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Lecture updated successfully",
            data: updatedLecture
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

const deleteLecture = async (req, res, next) => {
    try {
        const lecture = await Lecture.findByIdAndDelete(req.params.id);

        if (!lecture) {
            return res.status(404).json({
                success: false,
                message: "Lecture not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Lecture deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createLecture,
    getAllLectures,
    getLectureById,
    updateLecture,
    deleteLecture
};