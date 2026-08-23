const jwt = require('jsonwebtoken');
const { isAuthorized } = require('../../src/middlewares/auth');

let req, res, next;

beforeEach(() => {
    req = {headers: {}};
    next = jest.fn();
    res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
    }
})

describe('Testing isAuthorized Middleware', () => {
    it('should return 400 if token is missing', () => {
        isAuthorized(req, res, next);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({ message: "Token is required" });
        expect(next).not.toHaveBeenCalled();
    })
})
    
