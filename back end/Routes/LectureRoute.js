const express = require("express");
const router = express.Router();

const {
    createLecture,
    getAllLectures,
    getLectureById,
    updateLecture,
    deleteLecture
} = require("../Controller/LecturesController");

router.post("/createLecture", createLecture);
router.get("/getAllLectures", getAllLectures);
router.get("/getLectureById/:id", getLectureById);
router.patch("/updateLecture/:id", updateLecture);
router.delete("/deleteLecture/:id", deleteLecture);

module.exports = router;