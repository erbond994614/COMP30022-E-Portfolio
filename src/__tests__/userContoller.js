const mongoose = require('mongoose')
const httpMocks = require('node-mocks-http')
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer
const userConttroller = require('../../server/controllers/users')

let mockDatabase
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

beforeAll(async () => {
    mockDatabase = new MongoMemoryServer()
    const dbUri = await mockDatabase.getUri()
    await mongoose.connect(dbUri, options, (err) => {
        if (err) console.error(err)
    })
})

afterAll(async () => {
    await mongoose.disconnect()
    await mockDatabase.stop()
})

describe('User Controller - Create User', () => {
    it('Should successfully create a new user', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            body: {
                email: 'test@student',
                password: 'password',
                role: 'student',
                portfolio: {
                    profilePicture: null,
                    info: {
                        Name: "Steve Gates",
                        Age: 20,
                        Major: "CS"
                    },
                    aboutMe: {
                        para1: "i am a student",
                        para2: "this is a paragraph",
                        para3: "there are 3 paragraphs"
                    },
                    blog: []
                }
            }
        })
        const res = httpMocks.createResponse(req)
        await userConttroller.createUser(req, res).then(async () => {
            const body = await res._getData()
            expect(res.statusCode).toBe(201)
            expect(body).toHaveProperty('token')
            expect(body).toHaveProperty('user')
            expect(body.user).toHaveProperty('email')
            expect(body.user).toHaveProperty('password')
            expect(body.user).toHaveProperty('role')
            expect(body.user).toHaveProperty('portfolio')
            expect(body.user).toHaveProperty('tokens')
            expect(body.user.email).toBe('test@student')
            expect(body.user.password).not.toBe('password')
        })
    })
    it('Sould fail to create a new user with an existing email', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            body: {
                email: 'test@student',
                password: 'newPassword',
                role: 'student',
                portfolio: {
                    profilePicture: null,
                    info: {
                        Name: "Steve Gates",
                        Age: 20,
                        Major: "CS"
                    },
                    aboutMe: {
                        para1: "i am a student",
                        para2: "this is a paragraph",
                        para3: "there are 3 paragraphs"
                    },
                    blog: []
                }
            }
        })
        const res = httpMocks.createResponse(req)
        await userConttroller.createUser(req, res).then(async () => {
            const body = await res._getData()
            expect(res.statusCode).toBe(400)
            expect(body).toHaveProperty('error')
            expect(body.error).toBe('email already exists')
        })
    })
    it('Should fail to create a user without a well-formed portfolio', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            body: {
                email: 'test@student2',
                password: 'password',
                portfolio: {
                    firstName: 'test',
                    lastName: 'student',
                    age: '100',
                    aboutMe: {
                        para1: "i am a student",
                        para2: "this is a paragraph",
                        para3: "there are 3 paragraphs"
                    }
                }
            }
        })
        const res = httpMocks.createResponse(req)
        await userConttroller.createUser(req, res).then(async () => {
            const body = await res._getData()
            expect(res.statusCode).toBe(400)
            expect(body).toHaveProperty('error')
            expect(body.error).toBe('Bad Request')
        })
    })
})

describe('User Controller - Login', () => {
    it('Should successfully login an existing user', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            body: {
                email: 'test@student',
                password: 'password'
            }
        })
        const res = httpMocks.createResponse(req)
        await userConttroller.loginUser(req, res).then(async () => {
            const body = await res._getData()
            expect(res.statusCode).toBe(201)
            expect(body).toHaveProperty('token')
            expect(body).toHaveProperty('user')
            expect(body.user).toHaveProperty('email')
            expect(body.user).toHaveProperty('password')
            expect(body.user).toHaveProperty('role')
            expect(body.user).toHaveProperty('portfolio')
            expect(body.user).toHaveProperty('tokens')
            expect(body.user.email).toBe('test@student')
            expect(body.user.password).not.toBe('password')
        })
    })
    it('Should fail to login with an incorrect password', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            body: {
                email: 'test@student',
                password: 'notPassword'
            }
        })
        const res = httpMocks.createResponse(req)
        await userConttroller.loginUser(req, res).then(async () => {
            const body = await res._getData()
            expect(res.statusCode).toBe(400)
            expect(body).toHaveProperty('error')
            expect(body.error).toBe('Incorrect Email or Password')
        })
    })
    it('Should fail to login an unknown user', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            body: {
                email: 'test@student2',
                password: 'password'
            }
        })
        const res = httpMocks.createResponse(req)
        await userConttroller.loginUser(req, res).then(async () => {
            const body = await res._getData()
            expect(res.statusCode).toBe(400)
            expect(body).toHaveProperty('error')
            expect(body.error).toBe('Email does not exist')
        })
    })
})

describe('User Controller - Update Portfolio', () => {
    it('Should successfully update a well-formed portfolio', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            body: {
                profilePicture: null,
                info: {
                    Name: "Test Student",
                    Age: 21,
                    Major: "CSS"
                },
                aboutMe: {
                    para1: "i am a student of a uni",
                    para2: "this is a paragraph about nothing",
                    para3: "there are 3 paragraphs about nothing"
                },
                blog: []
            },
            user: {
                email: 'test@student'
            }
        })
        const res = httpMocks.createResponse(req)
        await userConttroller.updatePortfolio(req, res).then(async () => {
            const body = await res._getData()
            expect(res.statusCode).toBe(201)
            expect(body).toHaveProperty('email')
            expect(body).toHaveProperty('password')
            expect(body).toHaveProperty('role')
            expect(body).toHaveProperty('portfolio')
            expect(body).toHaveProperty('tokens')
            expect(body.email).toBe('test@student')
            expect(body.password).not.toBe('password')
            expect(body.role).toBe('student')
            expect(body.portfolio).toHaveProperty('info')
            expect(body.portfolio).toHaveProperty('aboutMe')
            expect(body.portfolio).toHaveProperty('profilePicture')
            expect(body.portfolio.info.has('Name')).toEqual(true)
            expect(body.portfolio.info.has('Age')).toEqual(true)
            expect(body.portfolio.info.has('Major')).toEqual(true)
            expect(body.portfolio.info.get('Name')).toBe('Test Student')
            expect(body.portfolio.info.get('Age')).toBe('21')
            expect(body.portfolio.info.get('Major')).toBe('CSS')
            expect(body.portfolio.aboutMe).toHaveProperty('para1')
            expect(body.portfolio.aboutMe).toHaveProperty('para2')
            expect(body.portfolio.aboutMe).toHaveProperty('para3')
            expect(body.portfolio.aboutMe.para1).toBe('i am a student of a uni')
            expect(body.portfolio.aboutMe.para2).toBe('this is a paragraph about nothing')
            expect(body.portfolio.aboutMe.para3).toBe('there are 3 paragraphs about nothing')
        })
    })
    it('Should fail to update witout a well-formed portfolio', async () => {
        const req = httpMocks.createRequest({
            method: 'POST',
            body: {
                firstName: "Test",
                lastName: 'Student',
                age: 21,
                major: "CSS",
                profilePicture: null,
                aboutMe: {
                    para1: "i am a student of a uni",
                    para2: "this is a paragraph about nothing",
                    para3: "there are 3 paragraphs about nothing"
                }
            },
            user: {
                email: 'test@student'
            }
        })
        const res = httpMocks.createResponse(req)
        await userConttroller.updatePortfolio(req, res).then(async () => {
            const body = await res._getData()
            expect(res.statusCode).toBe(400)
            expect(body).toHaveProperty('error')
            expect(body.error).toBe('Bad Request')
        })
    })
})