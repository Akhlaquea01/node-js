const express = require('express');
const router = express.Router();

const {getACourseById, getAllCourses, createACourse} = require('../controllers/coursesController');
router.use(express.json());

router.get('/', (req, res) => {
    const courses =  getAllCourses();
    res.send(courses);
});

router.post('/', (req, res) => {
    console.log(req.body);
    const course = req.body;
    const dbCourse = createACourse(course);
    res.send(dbCourse);
});
router.get('/:courseId',  () => {
    const courseId = parseInt(req.params.courseId);
    const course =  getACourseById(courseId);
    res.send(course);
});

module.exports = router;
