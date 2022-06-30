const { Role, User } = require('../../models');
const { EmailAlreadyExistError } = require('../../errors');
const AuthenticationController = require('../AuthenticationController');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

describe('handleRegister', () => {
    const userModel = User;
    const roleModel = Role;
    const authenticationController = new AuthenticationController({ bcrypt, jwt, roleModel, userModel });

    beforeAll(() => {

    });

    afterAll(async () => {
        const users = await userModel.findAll({
            limit: 1,
            order: [['createdAt', 'DESC']]
        })

        const userId = users[0].id;
        await userModel.destroy({ where: { id: userId } });
    });

    it('should return accessToken of the new registered user', async () => {
        const userCredential = {
            name: "Testing User",
            email: 'Reza@binar.co.id',
            password: "123456"
        }

        const mReq = { body: userCredential };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };
        const mNext = jest.fn();
        await authenticationController.handleRegister(mReq, mRes, mNext);

        const expectedError = new EmailAlreadyExistError(mReq.body.email);
        expect(mRes.status).toBeCalledWith(422);
        expect(mRes.json).toBeCalledWith(expectedError);
    });

    it('should return EmailAlreadyExistError if Email already registered', async () => {
        const userCredential = {
            name: 'Brian',
            email: 'brian@binar.co.id',
            password: '123456'
        }

        const mReq = { body: userCredential };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };
        await authenticationController.handleRegister(mReq, mRes);

        const expectedError = new EmailAlreadyExistError(mReq.body.email);
        expect(mRes.status).toBeCalledWith(422);
        expect(mRes.json).toBeCalledWith(expectedError);
    });

    it('should catch error if there is no input', async () => {
        const mReq = { body: {} }
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() }
        const mNext = jest.fn()

        await authenticationController.handleRegister(mReq, mRes, mNext)

        expect(mNext).toHaveBeenCalled()
    })

})