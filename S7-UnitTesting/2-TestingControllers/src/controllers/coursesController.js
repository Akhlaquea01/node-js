const courses = require("../models/coursesModel");

const getAllCourse =  () => {
    // let resp;
    
    // for (let i=0; i< 1000; i++) {
    //     resp = courses.find(); 
    // }
    
    // return resp;


    return courses.find();
}

const getACourse =  (courseId) => {
    const course = courses.findById(parseInt(courseId));
    return course;
}

const createACourse =   (course) => {
    return courses.create(course);;
}

module.exports = {getAllCourse, getACourse, createACourse};