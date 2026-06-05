const express = require("express");
const router = express.Router();

const {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} = require("../Controllers/CourseController");

const { protect, restrictTo } = require("../Middlewares/authMiddleware");

router.use(protect);

router.route("/")
    .post(restrictTo("admin", "ministry"), createCourse)
    .get(getAllCourses);

router.route("/:id")
    .get(getCourseById)
    .patch(restrictTo("admin", "ministry", "teacher"), updateCourse)
    .delete(restrictTo("admin", "ministry", "teacher"), deleteCourse);

module.exports = router;