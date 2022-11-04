var supertest = require('supertest')
const request = supertest('reqres.in')

it('Get All Products', async function () {
    const response = await request.get('/api/products/3')
    console.log(response.body)
    expect(response.status).toBe(301)
    jest.setTimeout(() => {

    }, 100000);
})