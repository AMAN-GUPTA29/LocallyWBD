const { default: expect } = require("expect")
const fs = require('fs')
const { string } = require("yargs")

async function getAllData(){
    let data = await fetch('http://localhost:8080/api/customer/viewServices')
    data = await data.json()
    fs.writeFileSync('log.txt', JSON.stringify(data))
    return data
}

test('demo testing for sum', () => {
    expect(1+2).toBe(3)
})

test('testing login', async () => {
    expect( await getAllData() ).not.toBe(null)
})