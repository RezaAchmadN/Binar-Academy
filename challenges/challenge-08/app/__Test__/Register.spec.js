const app = require('../../app')
const request = require('supertest')
const { EmailAlreadyExistError } = require('../../app/errors')
const { User } = require('../../app/models')

jest.setTimeout(20000)

describe('Register route (POST /v1/register)', () => {
    describe('Successful Operation', () => {
        beforeAll(() => {

        })

        afterAll(async () => {
            await User.destroy({ 
                where: { 
                    name: "Reza",
                    email: "Reza@binar.co.id",
                }
            })
        })

        it('should not return accessToken of new registered user', (done) => {
            const newUserCredentials = {
                name: "Reza",
                email: "Reza@binar.co.id",
                password: "RezaBoi123"
            }
            request(app)
                .post('/v1/auth/register')
                .send(newUserCredentials)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    if (err) return done(err)

                    expect(res.header['content-type']).toMatch(/json/)
                    expect(res.status).toEqual(422)
                    expect(res.body.accessToken).not.toBeDefined()
                    done()
                })
            
        })
    })

    describe('Error Operation', () => {
        beforeAll(() => {
            
        })
        
        afterAll(() => {
            
        })
        it('(email taken) should return status code 422 and return error with error EmailAlreadyExistError', (done) => {
            const newUserCredential = {
                name: "brian",
                email: 'brian@binar.co.id',
                password: 'binar123'
            }
            const expectedError = new EmailAlreadyExistError(newUserCredential.email)
            const expectedResponse = {
                error: {
                    details: expectedError.details,
                    message: expectedError.message,
                    name: expectedError.name
                }
            }

            request(app)
                .post('/v1/auth/register')
                .send(newUserCredential)
                .set('Accept', 'application/json')
                .end((err, res) => {
                    if (err) return done(err)

                    expect(res.header['content-type']).toMatch(/json/)
                    expect(res.status).toEqual(422)
                    expect(res.body).toEqual(expectedResponse)
                    done()
                })
        })
        it('(empty request body) should return status code 500 and return error of specific type', (done) => {
            const expectedError = new TypeError("Cannot read properties of undefined (reading 'toLowerCase')")
            const expectedResponse = {
                error: {
                    details: null,
                    message: expectedError.message,
                    name: expectedError.name
                }
            }
            request(app)
                .post('/v1/auth/register')
                .set('Accept', 'application/json')
                .end((err, res) => {
                    if (err) return done(err)

                    expect(res.header['content-type']).toMatch(/json/)
                    expect(res.status).toEqual(500)
                    expect(res.body).toEqual(expectedResponse)
                    done()
                })
        })

        
    })
})