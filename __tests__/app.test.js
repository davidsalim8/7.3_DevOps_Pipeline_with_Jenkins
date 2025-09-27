
const request = require('supertest');
const app = require('../index'); // import Express app from index.js

describe('Basic checks', () => {
    test('GET /health returns JSON { status : "ok" }', async () => {
        const res = await request(app).get("/health");
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toMatch(/application\/json/i);
        expect(res.body).toHaveProperty('status','ok');
        expect(res.body).toHaveProperty('timestamp');
    });
    test('Home page responds', async () => {
        const res = await request(app).get("/");
        expect([200, 302]).toContain(res.status);
    });
});