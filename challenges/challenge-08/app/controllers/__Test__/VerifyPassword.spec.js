const { Role, User } = require('../../models');
const AuthenticationController = require('../AuthenticationController');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

describe('verifyPassword', () => {
    const roleModel = Role;
    const userModel = User;
    const authenticationController = new AuthenticationController({ bcrypt, jwt, roleModel, userModel });

    const expectedPassword = "123456"

    beforeAll(() => {
        
    });

    afterAll(() => {
        
    });

    it('should return true', async () => {
        const password = "123456"
        const hashedPassword = bcrypt.hashSync(password, 10)
        const result = authenticationController.verifyPassword(expectedPassword, hashedPassword)
        expect(result).toBeTruthy()
    })

    it('should return error of specific type', async () => {
        const password = null
        const expectedError = new Error(`Illegal arguments: ${typeof password}, string`)

        const func = () => {
            try{
                const hashedPassword = bcrypt.hashSync(password, 10)
                authenticationController.verifyPassword(expectedPassword, hashedPassword)
            } catch(err){
                throw err
            }
        }
        expect(func).toThrow(expectedError)
    })

    it('should return false if password invalid', async () => {
        const password = ""
        const hashedPassword = bcrypt.hashSync(password, 10)
        const result = authenticationController.verifyPassword(expectedPassword, hashedPassword)
        expect(result).not.toBeTruthy()
    })
});