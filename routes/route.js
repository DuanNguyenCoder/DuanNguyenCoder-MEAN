const router = require("express").Router();
const courseController = require("../controller/courseController");
const studentController = require("../controller/studentController");

// student routes
router.get("/student", studentController.getStudent);
router.get("/student/:id", studentController.getOne);
router.post("/student", studentController.addStudent);
router.put("/student/:id", studentController.updateStudent);
router.delete("/student/:id", studentController.deleteStudent);
router.get("/studentCourse/:id", studentController.getStudentByClass);

// course routes
router.post("/course", courseController.addCourse);
router.get("/course", courseController.getCourse);
router.delete("/course/:id", courseController.deleteCourse);

module.exports = router;
