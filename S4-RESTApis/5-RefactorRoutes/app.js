require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('./middlewares/loggerMiddleware');
const coursesRouter = require('./routes/coursesRoutes');

app.use(logger);


// mounting of routes
app.use("/api/v1/courses", coursesRouter);
app.use("/api/v2/courses", coursesRouter);


app.get('/', (req, res, next) => {
    res.send('This is BEL22');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT)
})