
import mongoose from 'mongoose'
import userEntity from '../models/user'
import { connectDb } from './db.helpers';
import dotenv from 'dotenv'

const initDb = async () => {
    dotenv.config({ path: '../.env' })
    console.log(process.env.MONGO_DB)
    await connectDb();
    await userEntity.insertMany([{
        _id: new mongoose.Types.ObjectId(),
        email: 'test2@gmail.com',
        password: '1234567',
        name: 'test 2',
        phone_number: '1234567'
    }])
}

initDb();