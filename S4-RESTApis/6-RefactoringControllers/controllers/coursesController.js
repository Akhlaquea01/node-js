const courses = require('../models/coursesModel');

const getAllCourses = () => {
    return courses;
};

const createACourse = (course) => {
    course.id = courses.length;
    courses.push(course);
    return course;
};


const getACourseById = (courseId) => {
    
    const course = courses[courseId];
    
    if (!course) {
        return res.status(404).send("The course you are looking for is not avaialble");
    }
    
    return course
};

module.exports = {getACourseById, getAllCourses, createACourse};
