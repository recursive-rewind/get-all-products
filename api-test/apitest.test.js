var supertest = require('supertest')
const request = supertest('https://reqres.in')

it('Get All Products', async function () {
    const response = await request.get('api/products/3')
    console.log(response.body)
    expect(response.status).toBe(undefined)
    jest.setTimeout(() => {

    }, 100000);
})