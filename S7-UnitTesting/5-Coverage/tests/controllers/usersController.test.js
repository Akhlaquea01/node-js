const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const saltRounds = 10;
const JWT_SECRET="PrivateKey";
const usersModel = require("../../src/models/usersModel");
const { registerUser, loginUser } = require("../../src/controllers/usersController");

let mongoServer; 

beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await mongoose.connect(uri);
})

afterAll (async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
})

afterEach(async () => {
    await usersModel.deleteMany({});
})



describe("Tests for usersController", () => {

     describe('Test registerUser function', () => {
        it('should register a new user successfully with all fields', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
   
            const dbUser = await registerUser(user);
            expect(dbUser).toHaveProperty("_id");
            expect(dbUser.name).toBe(user.name);
            expect(dbUser.email).toBe(user.email);
            expect(dbUser.role).toBe(user.role);
            // console.log(user.password, dbUser.password);
            expect(bcrypt.compareSync(user.password, dbUser.password)).toBe(true);
        });


        it('should throw an error if name is missing', async () => {
            const user = {
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            
            // If error is in a promise, you should use rejects first to process the thrown error
            await expect(registerUser(user)).rejects.toThrow("User validation failed: name: Path `name` is required.");
        })

        it('should throw an error if email is already in use', async () => {
            const user1 = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };

            const user2 = {
                name: "Jane Doe",
                email: "test@example.com", // Same email
                password: "password456",
                role: "admin"
            };

            await registerUser(user1);

            await expect(registerUser(user2)).rejects.toThrow("E11000 duplicate key error");
        })
    })
})


