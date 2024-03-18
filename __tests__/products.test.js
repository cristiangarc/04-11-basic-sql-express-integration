// tests/products.test.js
const request = require('supertest');
const app = require('../app');
const db = require('../config/db');

// Sample product data for testing
const sampleProduct = {
  name: 'Test Product',
  description: 'This is a test product',
  price: 9.99,
  quantity: 10
};

describe('Product API', () => {
  test('GET /products should return all products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  test('POST /products should create a new product', async () => {
    const response = await request(app)
      .post('/products')
      .send(sampleProduct);
    expect(response.body.name).toBe(sampleProduct.name);
  });

  test('GET /products/:id should return a single product', async () => {
    const createResponse = await request(app)
      .post('/products')
      .send(sampleProduct);
    const productId = createResponse.body.id;

    const response = await request(app).get(`/products/${productId}`);
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(productId);
  });

  test('PUT /products/:id should update a product', async () => {
    const createResponse = await request(app)
      .post('/products')
      .send(sampleProduct);
    const productId = createResponse.body.id;

    const updatedProduct = {
      ...sampleProduct,
      name: 'Updated Product'
    };

    const response = await request(app)
      .put(`/products/${productId}`)
      .send(updatedProduct);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe(updatedProduct.name);
  });

  test('DELETE /products/:id should delete a product', async () => {
    const createResponse = await request(app)
      .post('/products')
      .send(sampleProduct);
    const productId = createResponse.body.id;

    const response = await request(app).delete(`/products/${productId}`);
    expect(response.body.id).toBe(productId);
  });
});