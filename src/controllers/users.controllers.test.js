import { describe } from "mocha";
import request from 'supertest'
import express from 'express';
import { expect } from "chai";

const app = express();
const users = [
    {
        id: 1,
        email: 'test100@gmail.com',
        password: '1234567',
        name: 'test 2',
        phoneNumber: '1234567'
    }
];

describe('users controllers', async => {
    beforeEach(() => {
        app.get('/users', (req, res) => {
            res.status(200).json(users);
        });

        app.get('/users/:id', (req, res) => {
            const user = users.find(x => x.id === +req.params.id);
            res.status(200).json(user);
        });
    });

    it('getAll successful', async () => {
        const { status, body } = await request(app).get('/users');

        expect(status).to.equal(200);
        expect(Array.isArray(body)).to.true;
        expect(users.length).to.equal(body.length);
    });

    it('getUserById successful', async () => {
        const id = 1;
        const { status, body } = await request(app).get(`/users/${id}`);
        const user = users.find(x => x.id === id);

        expect(status).to.equal(200);
        expect(user).to.deep.equal(body);
    });

    it('getUserById returns null', async () => {
        const id = Math.random();
        const { status, body } = await request(app).get(`/users/${id}`);
        const user = users.find(x => x.id === id);

        expect(status).to.equal(200);
        expect(user).to.deep.equal(undefined);
    });
});