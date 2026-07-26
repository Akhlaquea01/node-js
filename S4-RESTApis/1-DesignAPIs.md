### You are aksed to design a course rating service. Provide capability to 
- Create a course
- Get a course by id
- update a course
- get average rating of a course
- get all studetns associated with the course


### Get a course by id
1. /api/v1/courses/{id}
2. course/create
3. GET /api/v1/course/{id}
4. GET /api/v1/courses/{id} --> Correct API


### Update a course

PUT /api/v1/courses/{id} --> Replace the course (Full replacement)
{body}

PATCH /api/v1/courses/{id} --> Updating the course (Partial information update)
{body}


### Create a course

POST /api/v1/courses
{body}


### Get average rating of a course
GET /api/v1/courses/average_ratings/{id}
GET /api/v1/courses/ratings/{id}

GET /api/v1/courses/:id/average-rating

GET /api/v1/courses/:id/ratings?type=avg

GET /api/v1/avg-ratings?course=courseId

### Get all students associated with the course

GET /api/v1/courses/{id}/students
GET /api/v1/students?course=courseId

GET api/v1/courses/:id/students/:student-id
