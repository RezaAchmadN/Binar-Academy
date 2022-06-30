const { Role, User } = require('../../models');
const { RecordNotFoundError } = require('../../errors');
const AuthenticationController = require('../AuthenticationController');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

describe('handleGetUser', () => {
    const roleModel = Role;
    const userModel = User;
    const authenticationController = new AuthenticationController({ bcrypt, jwt, roleModel, userModel });

    let user;
    let userRole;
    beforeAll(async () => {
        user = await userModel.findByPk(1);
        userRole = await roleModel.findByPk(user?.roleId);
    });

    afterAll(() => {

    });

    it('should return not found when getting user data', async () => {
        const mReq = { user: { id: user?.id } };
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };
        const mNext = jest.fn();
        await authenticationController.handleGetUser(mReq, mRes, mNext);

        const expectedResponse = {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            image: user?.image,
            role: {
                id: userRole?.id,
                name: userRole?.name
            }
        }
        expect(mRes.status).toBeCalledWith(404);
        // expect(mRes.json).toBeCalledWith(expectedResponse);

    });

    it('should return error with message RecordNotFoundError', async () => {
        const mReq = { user: { id: 0 } }
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() }
        const mNext = jest.fn()
        await authenticationController.handleGetUser(mReq, mRes, mNext)
        
        const expectedResponse = new RecordNotFoundError()
        expect(mRes.status).toBeCalledWith(404)
        expect(mRes.json).toBeCalledWith(expectedResponse)
    })

});