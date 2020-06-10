import moongoose from 'mongoose';
import dotenv from 'dotenv';
import makeUserDb from './userDb';

dotenv.config();


const url = process.env.DB_CONNECTION;

export default async function makeDb() {
    return await moongoose(url, { useNewUrlParser: true });
}
