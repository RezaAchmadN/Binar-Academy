const { Role, User } = require('../../models');
const AuthenticationController = require('../AuthenticationController');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {JWT_SIGNATURE_KEY} = require('../../../config/application')

describe('ficreateTokenFromUserrst', () => { 
    const roleModel = Role;
    const userModel = User;
    const authenticationController = new AuthenticationController({ bcrypt, jwt, roleModel, userModel });

    let payloadToken;
    let user;
    let userRole;
    beforeAll(async () => {
        user = await userModel.findByPk(1)
        userRole = await roleModel.findByPk(user?.roleId)
        payloadToken = {
            id: user?.id,
            name: user?.name,
            email: user?.email,
            image: user?.image,
            role: {
                id: userRole?.id,
                name: userRole?.name
            }
        }
    })

    afterAll(() => {
        
    });

    it('should return jwt token', async () => {
        const expectedToken = jwt.sign(payloadToken, JWT_SIGNATURE_KEY)

        const resultToken = authenticationController.createTokenFromUser(user, userRole)
        expect(resultToken).toEqual(expectedToken)
    })
 })