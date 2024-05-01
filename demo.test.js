require('dotenv').config()
const { expect } = require("expect")
const supertest = require('supertest')
const {app} = require('./server/test_server.js')

test('demo testing for sum', () => {
    expect(1 + 2).toBe(3)
})

test('testing get all services', async () => {
    const response = await supertest(app).get("/api/customer/viewServices")
    expect(response).not.toBe(null)
    return
})