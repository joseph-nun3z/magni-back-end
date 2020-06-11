import mongodb from 'mongodb';
import makeUserDb from './userDb';

require('dotenv/config');

const url = process.env.DB_CONNECTION;
const { MongoClient } = mongodb;
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


export async function makeDb() {
    if (!client.isConnected()) {
        console.warn('connecting...');
        await client.connect();
    }
    console.log('connected');
    return client.db('magni');
}

const userDb = makeUserDb({ makeDb });

export default userDb;
