const { Role, User } = require('../../models');
const AuthenticationController = require('../AuthenticationController');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

describe('encryptPassword', () => {
    const roleModel = Role;
    const userModel = User;
    const authenticationController = new AuthenticationController({ bcrypt, jwt, roleModel, userModel });

    beforeAll(() => {
        
    });

    afterAll(() => {
        
    });

    it('should return the hashed password', async () => {
        const resultHashedPassword = authenticationController.encryptPassword("123456")
        expect(resultHashedPassword).toBeDefined()
    })

    it('(blank password) should return the hashed password', async () => {
        const expectedError = new Error("Illegal arguments: undefined, string")
        const func = () => {
            try{
                authenticationController.encryptPassword()
            } catch(err){
                throw err
            }
        }
        expect(func).toThrow(expectedError)
    })
});