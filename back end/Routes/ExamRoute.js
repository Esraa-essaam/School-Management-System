const express = require("express");
const router = express.Router();

const {
    createExam,
    getAllExams,
    getExamById,
    updateExam,
    deleteExam
} = require("../Controller/ExamController");

router.post("/createExam", createExam);
router.get("/getAllExams", getAllExams);
router.get("/getExamById/:id", getExamById);
router.patch("/updateExam/:id", updateExam);
router.delete("/deleteExam/:id", deleteExam);

module.exports = router;