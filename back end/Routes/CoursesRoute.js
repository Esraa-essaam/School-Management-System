const express = require("express");
const router = express.Router();

const {
    createCourse,
    getAllCourses,
    getCourseById,
    updateCourse,
    deleteCourse
} = require("../Controller/CoursesController");

router.post("/createCourse", createCourse);
router.get("/getAllCourses", getAllCourses);
router.get("/getCourseById/:id", getCourseById);
router.patch("/updateCourse/:id", updateCourse);
router.delete("/deleteCourse/:id", deleteCourse);

module.exports = router;