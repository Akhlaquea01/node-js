const usersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 5;
const jwt = require('jsonwebtoken');

const  JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (user) => {
    user.password = bcrypt.hashSync(user.password, SALT_ROUNDS);    
    const dbUser = await usersModel.create(user);
    return dbUser;
};
 
const loginUser = async (email, password) => {
    
    const body = {
        email: email
    };

    const dbUser = await usersModel.findOne(body);

    if (!dbUser) {
        throw new Error("User not found");
    }

    const isSamePassword = dbUser.password == password;
    
    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }

    const payload = {
        id: dbUser._id,
        role: dbUser.role
    }

    const token = jwt.sign(payload,JWT_SECRET, {expiresIn: '1h'})
    
    return {status: "ok", token};
}


module.exports = {registerUser, loginUser};