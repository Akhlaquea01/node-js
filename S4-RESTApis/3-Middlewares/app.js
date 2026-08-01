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


// setInterval(() => {
//     console.log("Dummy info");
// }, 100);

const logger = (req, res, next) => {
    console.log(`[Logger] ${req.method}: Request recieved on ${req.url}`);
    next();
}

const logger2 = (req, res, next) => {
    console.log(`[Logger2] ${req.method}: Request recieved on ${req.url}`);
    next()
}

app.use(logger);


app.get('/', (req, res, next) => {
    res.send('This is BEL22');
})

// - Get all courses: GET /api/v1/courses

app.use(logger2);
app.get('/api/v1/courses', (req, res) => {
    console.log(req.query);
    res.send(courses);  
})


app.post('/api/v1/courses', (req, res) => {
    console.log(req.body);
    res.send(courses);  
})


// /api/v1/courses/:courseId/student/:studentId
app.get('/api/v1/courses/:courseId', [logger2, (req, res) => {
    const courseId = parseInt(req.params.courseId);
    
    const course = courses[courseId];
    
    if (!course) {
        return res.status(404).send("The course you are looking for is not avaialble");
    }
    res.send(course);  
}])

app.listen(3000, () => {
    console.log("Server is running")
})