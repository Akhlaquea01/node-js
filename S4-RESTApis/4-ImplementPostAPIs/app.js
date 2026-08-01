require('dotenv').config();
const express = require('express');

const app = express();

// Design Course Rating applicaiton
// - Get all courses: GET /api/v1/courses
// - Get one single course: GET /api/v1/courses/courseId
// - Create a new course: POST /api/v1/courses 

const courses = [
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 3,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
]

const logger = (req, res, next) => {
    console.log(`[Logger] ${req.method}: Request recieved on ${req.url}`);
    next();
}

app.use(logger);
// body-parser
app.use(express.json());



app.get('/', (req, res, next) => {
    res.send('This is BEL22');
})

app.get('/api/v1/courses', (req, res) => {
    console.log(req.query);
    res.send(courses);  
})

app.post('/api/v1/courses', (req, res) => {
    console.log(req.body);
    const course = req.body;
    course.id = courses.length;
    
    courses.push(course);
    res.send(course);  
})

app.get('/api/v1/courses/:courseId',  (req, res) => {
    const courseId = parseInt(req.params.courseId);
    
    const course = courses[courseId];
    
    if (!course) {
        return res.status(404).send("The course you are looking for is not avaialble");
    }
    res.send(course);  
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    // console.log(process.env);
    console.log("Server is running on port:", PORT)
})