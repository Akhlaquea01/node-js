const request = require('supertest');
const express = require('express');
const router = require("../../src/routes/usersRoute");
const { registerUser, loginUser } = require("../../src/controllers/usersController");
jest.mock("../../src/controllers/usersController");

const app = express();
app.use(express.json());

app.use(router);

describe('User Authentication Routes', () => {
    describe("Test Post API Endpoint", () => {
        it('should successfully register a user', async () => {
            const user = {
                name: "John Doe",
                email: "john@example.com",
                password: "password123",
                role: "user"
            };

            registerUser.mockResolvedValue(user);

            const response = await request(app)
                                  .post('/register')
                                  .send(user)
                                  .expect(201);
            // console.log(user, response.body);
            expect(response.body).toEqual(user);
            expect(registerUser).toHaveBeenCalledTimes(1);
        })


        it('should return an error if registration fails', async () => {
            const user = {
                name: "Jane Doe",
                email: "jane@example.com",
                password: "password123",
                role: "user"
            };

            // Mock the registerUser function to simulate an error
            registerUser.mockRejectedValue({message: "User registration failed"});

            const response = await request(app)
                .post('/register')
                .send(user)
                .expect(500); // Assuming server error status code
                // console.log(response.body);   
                // expect(response.body.message).toBe("User registration failed");
        });
    })
})








