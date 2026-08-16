require('dotenv').config(); 
const express = require('express');
// Step 1: Import Mongoose

const mongodb = require("mongodb");

const mongoose = require("mongoose"); 

const PORT = process.env.PORT || 3000;


// const 

const app = express();
app.use(express.json());

const {logger} = require('./middlewares/loggerMiddleware');

app.use(logger);

const coursesRouter =  require('./routes/coursesRoute');

app.use('/api/v1/courses', coursesRouter)


const usersRoutes =  require('./routes/usersRoute');

app.use('/api/v1/users', usersRoutes)


app.get('/', (req, res) => {
    res.send('Hello World');
})

const URI = process.env.MONGODB_URI;

console.log(URI);
mongoose.connect(URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${3000}`);
    })
    console.log("Connected")
})
