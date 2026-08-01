const express = require('express');
const router = express.Router();
const courses = require('../models/coursesModel');


const getAllCourses = (req, res) => {
    console.log(req.query);
    res.send(courses);  
};

const createACourse = (req, res) => {
    console.log(req.body);
    const course = req.body;
    course.id = courses.length;
    
    courses.push(course);
    res.send(course);  
};


const getACourseById = (req, res) => {
    const courseId = parseInt(req.params.courseId);
    
    const course = courses[courseId];
    
    if (!course) {
        return res.status(404).send("The course you are looking for is not avaialble");
    }
    res.send(course);  
};

router.use(express.json());
router.get('/', getAllCourses);
router.post('/', createACourse);
router.get('/:courseId',  getACourseById);

module.exports = router;
