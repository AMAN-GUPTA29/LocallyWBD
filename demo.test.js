require('dotenv').config()
const { expect } = require("expect")
const supertest = require('supertest')
const {app} = require('./server/test_server.js')

async function logAndToken(){
    const response = await supertest(app).post("/api/consumer/login/")
    .send({
        email: "consumer1@locally.com",
        password: "abCD12#$"
    })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')

    return response._body.data
}





test('demo testing for sum', () => {
    expect(1 + 2).toBe(3)
})

test('testing get all services', async () => {
    const response = await supertest(app).get("/api/customer/viewServices")
    expect(response).not.toBe(null)
    return
})

test('testing login user', async () => {
    const response = await supertest(app).post("/api/consumer/login/")
    .send({
        email: "consumer1@locally.com",
        password: "abCD12#$"
    })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    expect(response._body.data).not.toBe(null)
})

test('getting profile data', async () => {
    const tokn = await logAndToken()
    const response = await supertest(app).get("/api/consumer/profile")
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set("Authorization", `Bearer ${tokn}`)
    // console.log(response)
    expect(response._body.data).not.toBe(null)
})

test('getting list of broadcast', async () => {
    const tkn = await logAndToken();
    const response = await supertest(app).get("/api/consumer/viewbroadcast")
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set("Authorization", `Bearer ${tkn}`)

    console.log(response._body)
    expect(response._body.data).not.toBe(null)
})

test('fetching seller details for customer', async () => {
    const tkn = await logAndToken();
    const response = await supertest(app).post("/api/consumer/sellerprofileview")
    .send({
        pointer: "seller-id"
    })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set("Authorization", `Bearer ${tkn}`)

    // console.log(response._body)
    expect(response._body.data).toBe(undefined)
})

// Finalise