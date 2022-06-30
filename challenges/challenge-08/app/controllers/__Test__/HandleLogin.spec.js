const { Role, User } = require('../../models');
const { EmailNotRegisteredError, WrongPasswordError } = require('../../errors');
const AuthenticationController = require('../AuthenticationController');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

describe('handleLogin', () => {
    const userModel = User;
    const roleModel = Role;
    const authenticationController = new AuthenticationController({ bcrypt, jwt, roleModel, userModel });

    beforeEach(() => {

    });;

    afterAll(() => {

    });

    it('should return access token while user login', async () => {
        userCredential = {
            email: "brian@binar.co.id",
            password: "123456"
        };
        const mReq = { body: userCredential };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };
        const mNext = jest.fn();
        await authenticationController.handleLogin(mReq, mRes, mNext);

        expect(mRes.status).toBeCalledWith(201);
        expect(mRes.json).toBeCalledWith(
            expect.objectContaining({
                accessToken: expect.any(String),
            })
        )
    });

    it('should return email not registered ', async () => {
        userCredential = {
            email: "hoyoverse@example.co.id",
            password: "12345512132W6"
        };

        const mReq = { body: userCredential };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };
        const mNext = jest.fn();
        await authenticationController.handleLogin(mReq, mRes, mNext);

        const expectedError = new EmailNotRegisteredError(mReq.body.email);
        expect(mRes.status).toBeCalledWith(404);
        expect(mRes.json).toBeCalledWith(expectedError);

    });

    it('should return password error', async () => {
        userCredential = {
            email: "brian@binar.co.id",
            password: "password salah"
        };

        const mReq = { body: userCredential };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };
        const mNext = jest.fn();
        await authenticationController.handleLogin(mReq, mRes, mNext);
        
        const expectedError = new WrongPasswordError(mReq.body.password);
        expect(mRes.status).toBeCalledWith(401);
        expect(mRes.json).toBeCalledWith(expectedError);

    });
    
    it('should catch error if there is no input', async () => {
        const mReq = { body: {} };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };
        const mNext = jest.fn();
        await authenticationController.handleLogin(mReq, mRes, mNext);

        expect(mNext).toHaveBeenCalled();
    });
})