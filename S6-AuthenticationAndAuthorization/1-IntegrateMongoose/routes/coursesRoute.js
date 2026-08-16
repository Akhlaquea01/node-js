const express = require('express');
const router = express.Router();

router.use(express.json());
const {getCourseById, getAllCourses, createCourse} = require('../controllers/coursesController');
const {isAuthorized} = require('../middlewares/auth');
router.use(express.json());
router.use(isAuthorized);

router.get('/', (req, res) => {
    console.log(req.body);
    const courses =  getAllCourses();
    res.send(courses);
});

router.post('/', (req, res) => {
    console.log(req.body);
    const course = req.body;
    const dbCourse = createCourse(course);
    res.send(dbCourse);
});
router.get('/:courseId',  (req, res) => {
    const courseId = parseInt(req.params.courseId);
    const course =  getCourseById(courseId);
    res.send(course);
});

module.exports = router;
