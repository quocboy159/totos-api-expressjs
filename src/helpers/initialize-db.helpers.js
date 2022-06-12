
import mongoose from 'mongoose'
import userEntity from '../models/user'
import { connectDb } from './db.helpers';

const initDb = async () => {
    await connectDb();
    await userEntity.insertMany([{
        _id: new mongoose.Types.ObjectId(),
        email: 'test100@gmail.com',
        password: '1234567',
        name: 'test 2',
        phoneNumber: '1234567'
    }])
}

initDb();